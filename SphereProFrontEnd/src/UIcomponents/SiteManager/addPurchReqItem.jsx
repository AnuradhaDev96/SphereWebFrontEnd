//Created By Anuradha
//Screen 1 of creating purchase request
import React, {Component} from 'react';
import ViewSuppliers from "./ListComponents/viewSuppliers"
import axios from "axios";

export default class AddPurchReqItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            requestItemId: this.props.match.params.reqItemId,
            requestId: this.props.match.params.reqId,
            supplierId: this.props.match.params.supId,
            amount: 0,
            subTotal: 0,
            deliveryStatus: 'OPEN',
            itemName: '',
            unitPrice: 0
        }
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.calcSubTotal = this.calcSubTotal.bind(this);
        this.headers = {
            "Content-Type": "application/json"
        };
        this.loadDetails();
    }

    loadDetails() {
        axios.get('http://localhost:1218/db/SupItems/getByKeys/' + this.props.match.params.reqItemId + '/' + this.props.match.params.supId).then(response => {
            if(response.data.statusCode === 200){
                this.setState({
                    itemName: response.data.data.itemName,
                    unitPrice: response.data.data.unitPrice
                });

            } else{
                alert(response.data.message);
            }
        }).catch(err => {
            alert(err);
        });
    }

    calcSubTotal(e){
        this.setState({
            subTotal: this.state.unitPrice * this.state.amount

        });
    }

    onChange(e){
        this.setState({
            [e.target.id]: e.target.value,
            edit: true,
        });
    }

    onSave(e){
        e.preventDefault();
        if(this.state.amount === 0){
            alert("Amount cannot be zero!");
            return;
        }
        const data = {
            requestItemId: this.state.requestItemId,
            requestId: this.state.requestId,
            supplierId: this.state.supplierId,
            amount: this.state.amount,
            subTotal: this.state.unitPrice * this.state.amount,
            deliveryStatus: this.state.deliveryStatus
        };
        // alert(data.deliverDate);
        axios.post('http://localhost:1218/db/PurchReq/PurchItems/addItem', data, {headers: this.headers}).then(response => {
            if (response.data.statusCode === 200) {
                alert(response.data.message);
                // this.renderModel();
                this.props.history.push('/addToCart/' + data.supplierId + '/' + data.requestId);
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
                <div className="card border-light p-5">
                    <h1 className="text-center">Create Purchase Request</h1>
                    <h4 className="text-center">Step 4 - Add to Cart</h4>

                    <h5>Purchase Request Id <span className="badge badge-primary">{this.state.requestId}</span></h5>
                    <h5>Supplier Id <span className="badge badge-primary">{this.state.supplierId}</span></h5>
                    <h5>Item Id<span className="badge badge-primary">{this.state.requestItemId}</span></h5>
                    <h5>Item Name <span className="badge badge-primary">{this.state.itemName}</span></h5>
                    <h5>Unit Price <span className="badge badge-primary">{this.state.unitPrice}</span></h5>
                    <h5>Sub Total <span className="badge badge-warning">{this.state.subTotal}</span></h5>
                    <form className="border border-light" onSubmit={this.onSave}>
                        <div className="form-group">
                            <label htmlFor="amount" className="">Add Amount</label>
                            <input id="amount" className="form-control" type="number"
                                   value={this.state.amount} onChange={this.onChange} required={true}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Add to Cart</button>
                        <button type="button" onClick={this.calcSubTotal} className="btn btn-primary">Calculate Sub Total</button>

                    </form>
                    {/*<ViewSuppliers/>*/}
                </div>
            </div>
        );
    }
}