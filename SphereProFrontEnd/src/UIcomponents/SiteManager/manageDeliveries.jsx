import axios from 'axios';
import React, {Component} from 'react';
import OnePaymentsItem from './RowComponents/onePaymentsItem';
import {Link} from "react-router-dom";

export default class ManageDeliveries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payments: [],
            searchParam: ''
        }
        this.onChange = this.onChange.bind(this);
        this.search = this.search.bind(this);
        this.reload = this.reload.bind(this);
        this.delete = this.delete.bind(this);
    }

    // componentDidMount() {
    //     axios.get('http://localhost:1218/db/Payment/getAllPays').then(response => {
    //         if(response.data.statusCode === 200){
    //             this.setState({payments: response.data.data});
    //         } else{
    //             alert(response.data.message);
    //         }
    //     }).catch(err => {
    //         alert(err);
    //     });
    // }

    search(e) {
        e.preventDefault();
        axios.get('http://localhost:1218/db/order/getOrderById/' + this.state.searchParam).then(response => {
            if(response.data.statusCode === 200){
                if(response.data.data.length === 0){
                    alert(this.state.searchParam + " cannot be found");
                }
                this.setState({
                    payments: []});
                this.setState({
                    payments: response.data.data});
                this.render();
            } else{
                alert(response.data.message);
            }
        }).catch(err => {
            alert(err);
        });
    }

    reload(e) {
        e.preventDefault();
        window.location.reload();

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
            paymentId: this.state.paymentId,
            purchaseOrderId: this.state.purchaseOrderId,
            amount: this.state.amount,
            paidOn: this.state.paidOn,
            paidBy: this.state.paidBy
        };
        axios.post('http://localhost:1218/db/Payment/GetPaymentById', data, {headers: this.headers}).then(response => {
            if (response.data.statusCode === 200) {
                if(window.confirm(response.data.message +"\nDo you want to add Items of this supplier?")){
                    // window.location.href="/addSupplierItems/"+data.supplierId;
                    this.props.history.push('/searchPayment/'+data.paymentId);
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

    delete(e) {
        e.preventDefault();
        axios.get('http://localhost:1218/db/Payment/viewDeletedPayments').then(response => {
            if(response.data.statusCode === 200){
                // if(response.data.data.length === 0){
                //     alert(this.state.searchParam + " cannot be found");
                // }
                this.setState({
                    payments: []});
                this.setState({
                    payments: response.data.data});
                this.render();
            } else{
                alert(response.data.message);
            }
        }).catch(err => {
            alert(err);
        });
    }



    listTableRow() {
        return this.state.payments.map(function (object, index) {
            return <OnePaymentsItem obj = {object} key={index}/>
        })
    }


    render() {
        return (
            <div className="p-3">
                <input id="searchParam" maxLength="10" type="text" placeholder="Search.."  value={this.state.searchParam} onChange={this.onChange}/>
                <span> </span>
                <button type="button" onClick={this.search} className="btn btn-outline-primary">Search</button>
                <span> </span>
                <button type="button" onClick={this.reload} className="btn btn-outline-success">Set Order Recieved</button>
                <span> </span>
                <button type="button" onClick={this.delete} className="btn btn-outline-secondary">Set Order In Progress</button>
                <br/><br/><br/>

                <h5 className="text-white">Order Id <span className="badge badge-info">{this.state.requestId}</span></h5>
                <h5 className="text-white">Purchase Request Id <span className="badge badge-info">{this.state.supplierId}</span></h5>
                <h5 className="text-white">Item Id <span className="badge badge-info">{this.state.requestItemId}</span></h5>
                <h5 className="text-white">Item Name <span className="badge badge-info">{this.state.itemName}</span></h5>
                <h5 className="text-white">Unit Price <span className="badge badge-info">{this.state.unitPrice}</span></h5>
                <h5 className="text-white">Sub Total <span className="badge badge-warning">{this.state.subTotal}</span></h5>
            </div>
        );
    }
}