import React,{Component} from 'react'
import axios from "axios";

export default class AddSiteManagers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smanagerNo: '',
            sname: '',
            snic: '',
            scontactNo: '',
            site: '',
            approvedValue:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.headers = {
            "Content-Type": "application/json"
        };
    }
    onChange(e){
        this.setState({
            [e.target.id]: e.target.value,
            edit: true
        });
    }

    onSave(e){
        e.preventDefault();
        const data = {
            smanagerNo: this.state.smanagerNo,
            sname: this.state.sname,
            snic: this.state.snic,
            scontactNo: this.state.scontactNo,
            site: this.state.site,
            approvedValue:this.state.approvedValue
        };
        axios.post('http://localhost:1218/db/SiteManagers/addSiteManagers', data, {headers: this.headers}).then(response => {
            if (response.data.statusCode === 200) {
                alert(response.data.message);
                window.location.reload();
            } else {
                alert(response.data.message);
            }
        }).catch(err => {
            alert("Worry" + err);
        });
    }

    render() {
        return (
            <div>
                <div className="card bg-transparent">
                    <form className="p-5" onSubmit={this.onSave}>
                        <p className="text-center h1 mb-1 text-white">Add Site Managers</p>
                        <div className="form-group">
                            <label htmlFor="smanagerNo" className="text-white">Site Manager Id</label>
                            <input id="smanagerNo" className="form-control" type="text" placeholder="S123"
                                   aria-describedby="smanagerNoHelp" maxLength="10" value={this.state.smanagerNo} onChange={this.onChange} required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="sname" className="text-white">SiteManager Name</label>
                            <input id="sname" className="form-control" type="text" placeholder="ABC Hardware"
                                   aria-describedby="nameHelp" maxLength="20" value={this.state.sname} onChange={this.onChange} required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="snic" className="text-white">NIC Number</label>
                            <input id="snic" className="form-control" type="text" placeholder="XXXXXXXXXXV" maxLength="10"
                                   value={this.state.snic} onChange={this.onChange}  required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="scontactNo" className="text-white">Contact Number</label>
                            <input id="scontactNo" className="form-control" type="number" placeholder="XXXXXXXXXX" maxLength="10"
                                   value={this.state.scontactNo} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="site" className="text-white">Site</label>
                            <input id="site" className="form-control" type="text" placeholder="Site" maxLength="15"
                                   value={this.state.site} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="approvedValue" className="text-white">Approved Value</label>
                            <input id="approvedValue" className="form-control" type="number" placeholder="approved Value" maxLength="15"
                                   value={this.state.approvedValue} onChange={this.onChange} />
                        </div>
                        <button type="submit" onClick={this.onSave} className="btn btn-outline-primary">Save</button>
                    </form>
                </div>
            </div>
        );
    }

}