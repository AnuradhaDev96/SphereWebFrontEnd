import React,{Component} from 'react'
import axios from "axios";

export default class updateOrder extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            reqId:'',
            createBy:'',
            date:'',
            status:'',
        }
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.headers = {
            "Content-Type": "application/json"
        };

        this.loadDetails();
    }

    loadDetails() {
        axios.get('http://localhost:1218/db/order/getAllOrders/' + this.props.match.params.id).then(response => {
            if(response.data.statusCode === 200){
                this.setState({
                    id: response.data.data.id,
                    reqId: response.data.data.reqId,
                    createBy: response.data.data.createBy,
                    date: response.data.data.date,
                    status: response.data.data.status,

                });

            } else{
                alert(response.data.message);
            }
        }).catch(err => {
            alert(err);
        });
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
            id: this.state.id,
            reqId: this.state.reqId,
            createBy: this.state.createBy,
            date: this.state.date,
            status: this.state.status,

        };
        axios.put('http://localhost:1218/db/order/editOrderById/' + this.state.id, data, {headers: this.headers}).then(response => {
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
                <div className="card">
                    <form className="border border-light p-5" onSubmit={this.onSave}>
                        <p className="text-center h1 mb-1">Update {this.state.title}</p>
                        <div className="form-group">
                            <label htmlFor="id" className="">Purchase Id</label>
                            <input id="id" className="form-control" type="text" placeholder="S123"
                                   aria-describedby="idHelp" maxLength="10" value={this.state.id} onChange={this.onChange} required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="reqId"> Purchase Request Id</label>
                            <input id="reqId" className="form-control" type="text" placeholder="R234"
                                   aria-describedby="reqIdHelp" maxLength="20" value={this.state.reqId} onChange={this.onChange} required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="createBy">Created By</label>
                            <input id="createBy" className="form-control" type="text" placeholder="XXXXXXXXXXV" maxLength="10"
                                   value={this.state.createBy} onChange={this.onChange}  required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input id="date" className="form-control" type="date" placeholder="" maxLength="10"
                                   value={this.state.date} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">Site</label>
                            <input id="status" className="form-control" type="text" placeholder="Open/Close/InProgress" maxLength="15"
                                   value={this.state.status} onChange={this.onChange} />
                        </div>

                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        );
    }
}