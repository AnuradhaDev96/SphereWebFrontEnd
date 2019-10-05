import React, {Component} from 'react';
import axios from "axios";

export default class SearchPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentId: '',
            purchaseOrderId: '',
            amount:'',
            paidOn: '',
            paidBy: '',
            title: ''
        }


        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.headers = {
            "Content-Type": "application/json"
        };
        this.loadDetails();
    }

    loadDetails() {
        axios.get('http://localhost:1218/db/Payment/getPaymentById/' + this.props.match.params.id).then(response => {
            if(response.data.statusCode === 200){
                this.setState({
                    paymentId: response.data.data.paymentId,
                    purchaseOrderId: response.data.data.purchaseOrderId,
                    amount: response.data.data.amount,
                    paidOn: response.data.data.paidOn,
                    paidBy: response.data.data.paidBy,
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
            paymentId: this.state.paymentId,
            purchaseOrderId: this.state.purchaseOrderId,
            amount: this.state.amount,
            paidOn: this.state.paidOn,
            paidBy: this.state.paidBy
        };
        axios.put('http://localhost:1218/db/Payment/getPaymentById/' + this.state.paymentId, data, {headers: this.headers}).then(response => {
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
                        <p className="text-center h1 mb-1">{this.state.title}</p>
                        <div className="form-group">
                            <label htmlFor="supplierId" className="">Payment ID</label>
                            <input id="paymentId" className="form-control" type="text" placeholder="PAY123"
                                   aria-describedby="paymentIdHelp" maxLength="10" value={this.state.paymentId} onChange={this.onChange} required={true} readOnly={true}/>
                            <small id="paymentIdHelp" className="form-text text-muted">Application will check whether new supplier id already exists</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Purchase Order ID</label>
                            <input id="purchaseOrderId" className="form-control" type="text" placeholder="PUR123"
                                   aria-describedby="purchaseOrderIdHelp" maxLength="20" value={this.state.purchaseOrderId} onChange={this.onChange} required={true}/>
                            <small id="purchaseOrderIdHelp" className="form-text text-muted">Enter supplier's name or company name here</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="amount">Amount</label>
                            <input id="amount" className="form-control" type="number" placeholder="xxxxxxxxxxx"
                                   aria-describedby="amountHelp" maxLength="20" value={this.state.amount} onChange={this.onChange} required={true}/>
                            <small id="amountHelp" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="paidOn">Paid On</label>
                            <input id="paidOn" className="form-control" type="date" placeholder="dd-mm-yyyy"
                                   aria-describedby="paidOnHelp" maxLength="20" value={this.state.paidOn} onChange={this.onChange} required={true}/>
                            <small id="paidOnHelp" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="paidBy">Paid By</label>
                            <input id="paidBy" className="form-control" type="text" placeholder="xxxxxxxxxx"
                                   aria-describedby="paidByHelp" maxLength="20" value={this.state.paidBy} onChange={this.onChange} required={true}/>
                            <small id="paidByHelp" className="form-text text-muted"></small>
                        </div>

                        <button type="submit" className="btn btn-primary">OK</button>
                    </form>
                </div>
            </div>
        );
    }
}