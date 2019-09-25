import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default class AddSuppliers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supplierId: '',
            name: '',
            address:'',
            contactNo: '',
            email: ''
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
            supplierId: this.state.supplierId,
            name: this.state.name,
            address: this.state.address,
            contactNo: this.state.contactNo,
            email: this.state.email
        };
        axios.post('http://localhost:1218/db/Supplier/addSups', data, {headers: this.headers}).then(response => {
            if (response.data.statusCode === 200) {
                if(window.confirm(response.data.message +"\nDo you want to add Items of this supplier?")){
                    // window.location.href="/addSupplierItems/"+data.supplierId;
                    this.props.history.push('/addSupplierItems/'+data.supplierId);
                } else {
                    window.location.reload();
                }
                // this.renderModel();
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
                <div className="card">
                    <form className="border border-light p-5" onSubmit={this.onSave}>
                        <p className="text-center h1 mb-1">Add Supplier</p>
                        <div className="form-group">
                            <label htmlFor="supplierId" className="">Supplier Id</label>
                            <input id="supplierId" className="form-control" type="text" placeholder="SUP123"
                                   aria-describedby="supplierIdHelp" maxLength="10" value={this.state.supplierId} onChange={this.onChange} required={true}/>
                            <small id="supplierIdHelp" className="form-text text-muted">Application will check whether new supplier id already exists</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Supplier Name</label>
                            <input id="name" className="form-control" type="text" placeholder="ABC Hardware"
                                   aria-describedby="nameHelp" maxLength="20" value={this.state.name} onChange={this.onChange} required={true}/>
                            <small id="nameHelp" className="form-text text-muted">Enter supplier's name or company name here</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactNo">Contact Number</label>
                            <input id="contactNo" className="form-control" type="text" placeholder="XXXXXXXXXX" maxLength="10"
                                   value={this.state.contactNo} onChange={this.onChange}  required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Contact Number</label>
                            <input id="email" className="form-control" type="email" placeholder="user@gmail.com" maxLength="25"
                                   value={this.state.email} onChange={this.onChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        );
    }
}