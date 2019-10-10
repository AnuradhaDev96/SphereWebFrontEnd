import React, {Component} from 'react';
import axios from "axios";
import ManageSupplierItems from "./manageSupplierItems";

export default class EditSuppliers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supplierId: '',
            name: '',
            address:'',
            contactNo: '',
            email: '',
            title: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onAddItems = this.onAddItems.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.headers = {
            "Content-Type": "application/json"
        };
        this.loadDetails();
    }

    loadDetails() {
        axios.get('http://localhost:1218/db/Supplier/getSupplierById/' + this.props.match.params.id).then(response => {
            if(response.data.statusCode === 200){
                this.setState({
                    supplierId: response.data.data.supplierId,
                    name: response.data.data.name,
                    address: response.data.data.address,
                    contactNo: response.data.data.contactNo,
                    email: response.data.data.email,
                    title: response.data.data.name
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
            supplierId: this.state.supplierId,
            name: this.state.name,
            address: this.state.address,
            contactNo: this.state.contactNo,
            email: this.state.email
        };
        axios.put('http://localhost:1218/db/Supplier/editSupplierById/' + this.state.supplierId, data, {headers: this.headers}).then(response => {
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

    onAddItems(e){
        e.preventDefault();
        this.props.history.push('/addSupplierItems/'+this.state.supplierId);
    }

    onDelete(){
        axios.delete('http://localhost:1218/db/Supplier/deleteSups/' + this.props.match.params.id).then(response => {
            if (response.data.statusCode === 200) {
                alert(response.data.message);
                this.props.history.push('/suppliers');
            } else {
                alert(response.data.message);
            }
        }).catch(err => {
            alert(err);
        });
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <div className="card bg-transparent">
                            <form className="p-3" onSubmit={this.onSave}>
                                <p className="text-center h1 mb-1 text-white">{this.state.title}</p>
                                <div className="form-group">
                                    <label htmlFor="supplierId" className="text-white">Supplier Id</label>
                                    <input id="supplierId" className="form-control small" type="text" placeholder="SUP123"
                                           aria-describedby="supplierIdHelp" maxLength="10" value={this.state.supplierId} onChange={this.onChange} required={true} readOnly={true}/>
                                    <small id="supplierIdHelp" className="form-text text-muted">Application will check whether new supplier id already exists</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name" className="text-white">Supplier Name</label>
                                    <input id="name" className="form-control" type="text" placeholder="ABC Hardware"
                                           aria-describedby="nameHelp" maxLength="20" value={this.state.name} onChange={this.onChange} required={true}/>
                                    <small id="nameHelp" className="form-text text-muted">Enter supplier's name or company name here</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contactNo" className="text-white">Contact Number</label>
                                    <input id="contactNo" className="form-control" type="text" placeholder="XXXXXXXXXX" maxLength="10"
                                           value={this.state.contactNo} onChange={this.onChange}  required={true}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="text-white">Email</label>
                                    <input id="email" className="form-control" type="email" placeholder="user@gmail.com" maxLength="25"
                                           value={this.state.email} onChange={this.onChange} />
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Save</button>
                                <span> </span>
                                <button type="button" className="btn btn-outline-danger" onClick={this.onDelete}>Delete Supplier</button>
                                <span>  </span>
                                <button type="button" className="btn btn-outline-secondary" onClick={this.onAddItems}>Add Items</button>

                            </form>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-transparent p-3">
                            <div className="card-header">
                                <h3 className="text-white text-center card-title">Items of {this.state.title}</h3>
                            </div>
                            <div>
                                <ManageSupplierItems obj={{supplierId:this.props.match.params.id}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}