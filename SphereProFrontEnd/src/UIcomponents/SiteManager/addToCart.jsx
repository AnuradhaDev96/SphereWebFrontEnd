//Created By Anuradha
//Screen 1 of creating purchase request
import React, {Component} from 'react';
import ViewSupplierItems from "./ListComponents/viewSupplierItems"
import {Link} from "react-router-dom";
import ViewCart from "./ListComponents/viewCart";
import axios from "axios";

export default class AddToCart extends Component {
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
        this.placeOrder = this.placeOrder.bind(this);
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

    placeOrder(){
        const data = {
            requestId: this.state.requestId,
            totalAmount: this.state.totalAmount,
            createdBy: this.state.createdBy,
            requestStatus: 'OPEN',
            deliverDate: this.state.deliverDate
        };
        axios.put('http://localhost:1218/db/PurchReq/placeOrder/' + this.props.match.params.reqId, data, {headers: this.headers}).then(response => {
            if (response.data.statusCode === 200) {
                alert(response.data.message);
                window.location.reload();
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

                    <h1 className="text-center">Create Purchase Request</h1>
                    <h4 className="text-center">Step 3 - Add Items to Purchase Request</h4>
                    <div className="card p-3">
                        <div className="row">
                    <h5 className="col">Supplier Id <span className="badge badge-primary">{this.props.match.params.id}</span></h5>
                    <h5 className="col">Purchase Request Id <span className="badge badge-primary">{this.props.match.params.reqId}</span></h5>
                    <h5 className="col">Total <span className="badge badge-warning">{this.state.totalAmount}</span></h5>
                    <h5 className="col">Status <span className="badge badge-dark">{this.state.requestStatus}</span></h5>
                    <button type="button col" onClick={this.placeOrder} className="btn btn-info">Place Order</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                    <ViewSupplierItems obj={{supplierId:this.props.match.params.id, requestId:this.props.match.params.reqId,
                                            parentStatus: this.state.requestStatus}}/>
                            </div>
                        </div>
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