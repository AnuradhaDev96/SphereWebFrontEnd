//Created By Anuradha
//Screen 1 of creating purchase request
import React, {Component} from 'react';
import ViewSuppliers from "./ListComponents/viewSuppliers"
import axios from "axios";
import LoggedUserService from "../UserLogin/LoggedUserService";
import NavigationBar from "./siteManagerHome";

export default class CreatePurchaseRequest extends Component {
    constructor(props) {
        super(props);
        this.loggedUserService = new LoggedUserService();
        this.state = {
            requestId: '',
            createdBy: this.loggedUserService.username,
            deliverDate:''
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
            requestId: this.state.requestId,
            totalAmount: 0,
            createdBy: this.state.createdBy,
            requestStatus: 'NEW',
            deliverDate: this.state.deliverDate
        };
        // alert(data.deliverDate);
        axios.post('http://localhost:1218/db/PurchReq/addReq', data, {headers: this.headers}).then(response => {
            if (response.data.statusCode === 200) {
                alert(response.data.message);
                // this.renderModel();
                this.props.history.push('/addSupplierToPurch/'+data.requestId);
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
                <div className="card bg-transparent">
                    <h1 className="text-center text-white">Create Purchase Request</h1>
                    <h4 className="text-center text-white">Step 1 - Initial Details</h4>

                    <form className="border border-light p-5" onSubmit={this.onSave}>
                        <div className="form-group">
                            <label htmlFor="supplierId" className="text-white">Purchase Request Id</label>
                            <input id="requestId" className="form-control" type="text"
                                   aria-describedby="requestIdHelp" maxLength="10" value={this.state.requestId} onChange={this.onChange} required={true}/>
                            <small id="requestIdHelp" className="form-text text-muted text-white">Application will check whether new request id already exists</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="createdBy" className="text-white">Created By</label>
                            <input id="createdBy" className="form-control" type="text" placeholder="Site Manager Id"
                                   aria-describedby="nameHelp" maxLength="10" value={this.state.createdBy} onChange={this.onChange} readOnly={true} required={true}/>
                            <small id="createdByHelp" className="form-text text-muted">Enter supplier Id here</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="deliverDate" className="text-white">Deliver Date</label>
                            <input id="deliverDate" className="form-control" type="date"
                                   aria-describedby="deliverDateHelp" value={this.state.deliverDate} onChange={this.onChange} required={true}/>
                            <small id="deliverDateHelp" className="form-text text-muted">Enter the delivery date of order</small>
                        </div>
                        <button type="submit" className="btn btn-info">Save & Continue</button>
                    </form>
                    {/*<ViewSuppliers/>*/}
                </div>
            </div>
        );
    }
}