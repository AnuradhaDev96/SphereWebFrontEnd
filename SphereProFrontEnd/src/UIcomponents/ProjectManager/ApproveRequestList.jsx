import React, {Component} from 'react';
import ViewSupplierItems from "../SiteManager/ListComponents/viewSupplierItems"
import {Link} from "react-router-dom";
import ViewCart from "../SiteManager/ListComponents/viewCart";
import axios from "axios";

export default class ApproveRequestList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            requestId: '',
            totalAmount: 0,
            createdBy: '',
            requestStatus: '',
            deliverDate: ''
        }
        this.headers = {
            "Content-Type": "application/json"
        };
        this.onSave = this.onSave.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:1218/db/PurchReq/getPurchReqByReqId/' + this.props.match.params.reqId).then(response => {
            if(response.data.statusCode === 200){
                this.setState({
                    requestId: response.data.data.requestId,
                    totalAmount: response.data.data.totalAmount,
                    createdBy: response.data.data.createdBy,
                    requestStatus: response.data.data.requestStatus,
                    deliverDate: response.data.data.deliverDate
                });
            } else{
                alert(response.data.message);
            }
        }).catch(err => {
            alert(err);
        });
    }

    onSave(e) {
        e.preventDefault();
        const data = {
        };

        axios.put('http://localhost:1218/db/PurchReq/approvePurchReq/' + this.state.requestId, data, {headers: this.headers}).then(response => {
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


    delete(){
        axios.delete('http://localhost:1218/db/PurchReq/deletePurchReq/' + this.state.requestId).then(response => {
            if (response.data.statusCode === 200) {
                alert(response.data.message);
                window.location.href('/ManageRequest/');
                // this.prop.history.push('/ManageRequest/');
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
                <div className="card bg-transparent p-3">

                    <h1 className="text-center text-white">Create Purchase Request</h1>
                    <h4 className="text-center text-white">Step 3 - Add Items to Purchase Request</h4>
                    <div className="card p-3 bg-transparent">
                        <div className="row">
                            <h5 className="col text-white">Purchase Request Id <span className="badge badge-primary">{this.props.match.params.reqId}</span></h5>
                            <h5 className="col text-white">Total <span className="badge badge-warning">{this.state.totalAmount}</span></h5>
                            <h5 className="col text-white">Status <span className="badge badge-dark">{this.state.requestStatus}</span></h5>

                            <button onClick={this.onSave}  disabled={this.state.requestStatus !== 'NEED APPROVAL'} className="btn btn-outline-success">Approve</button>
                            <span> </span>
                            <button onClick={this.delete}  className="btn btn-outline-danger">Decline</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <ViewCart obj={{requestId:this.props.match.params.reqId, parentStatus: this.state.requestStatus}}/>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        );
    }
}