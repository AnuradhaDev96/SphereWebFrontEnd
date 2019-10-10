import React, {Component} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default class AddPayments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentId: '',
            purchaseOrderId: '',
            amount:'',
            paidOn: '',
            paidBy: ''
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
            paymentId: this.state.paymentId,
            purchaseOrderId: this.state.purchaseOrderId,
            amount: this.state.amount,
            paidOn: this.state.paidOn,
            paidBy: this.state.paidBy,
            status: 'OPEN'
        };
        axios.post('http://localhost:1218/db/Payment/addPays', data, {headers: this.headers}).then(response => {
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
                        <p className="text-center h1 mb-1 text-white">Add Payments</p>
                        <div className="form-group">
                            <label htmlFor="paymentId" className="text-white">Payment Id</label>
                            <input id="paymentId" className="form-control" type="text" placeholder="PAY123"
                                   aria-describedby="paymentdIdHelp" maxLength="10" value={this.state.paymentId} onChange={this.onChange} required={true}/>
                            <small id="paymentIdHelp" className="form-text text-muted">Application will check whether new payment id already exists</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="purchaseOrderId" className="text-white">Purchase Order ID</label>
                            <input id="purchaseOrderId" className="form-control" type="text" placeholder="PUR123"
                                   aria-describedby="purchaseOrderIdHelp" maxLength="20" value={this.state.purchaseOrderId} onChange={this.onChange} required={true}/>
                            <small id="purchaseOrderIdHelp" className="form-text text-muted">Application will check whether new payment id already exists</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="amount" className="text-white">Amount</label>
                            <input id="amount" className="form-control" type="number" placeholder="xxxxxxxxxxx"
                                   aria-describedby="amountHelp" maxLength="20" value={this.state.amount} onChange={this.onChange} required={true}/>
                            <small id="amountHelp" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="paidOn" className="text-white">Paid On</label>
                            <input id="paidOn" className="form-control" type="date" placeholder="dd-mm-yyyy"
                                   aria-describedby="paidOnHelp" maxLength="20" value={this.state.paidOn} onChange={this.onChange} required={true}/>

                        </div>
                        <div className="form-group">
                            <label htmlFor="paidBy" className="text-white">Paid By</label>
                            <input id="paidBy" className="form-control" type="text" placeholder="xxxxxxxxxx"
                                   aria-describedby="paidByHelp" maxLength="20" value={this.state.paidBy} onChange={this.onChange} required={true}/>

                        </div>

                        <button type="submit" className="btn btn-outline-primary">Add payments</button>



                    </form>
                </div>
            </div>
        );
    }
}