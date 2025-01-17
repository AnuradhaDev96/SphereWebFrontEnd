import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

export default class AddSupplierItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supItemId: '',
            supplierId: this.props.match.params.id,
            itemName: '',
            unitPrice: 0
        }
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onClear = this.onClear.bind(this);
        this.headers = {
            "Content-Type": "application/json"
        };
    }

    onClear(e){
        this.setState({
            supItemId: '',
            itemName: '',
            unitPrice: ''
        })
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
            supItemId: this.state.supItemId,
            supplierId: this.state.supplierId,
            itemName: this.state.itemName,
            unitPrice: this.state.unitPrice
        };
        axios.post('http://localhost:1218/db/SupItems/addItems', data, {headers: this.headers}).then(response => {
            if (response.data.statusCode === 200) {
                alert(response.data.message);
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
                    <form className="border border-light p-5" onSubmit={this.onSave}>
                        <p className="text-center h1 mb-1 text-white">Add Supplier Items</p>
                        <div className="form-group">
                            <label htmlFor="supplierId" className="text-white">Supplier Id</label>
                            <input id="supplierId" className="form-control" type="text" placeholder="SUP123"
                                   aria-describedby="supplierIdHelp" maxLength="10" value={this.state.supplierId} onChange={this.onChange} required={true} readOnly={true}/>
                            <small id="supplierIdHelp" className="form-text text-muted">Application will check whether new supplier id already exists</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="supItemId" className="text-white">Item Id</label>
                            <input id="supItemId" className="form-control" type="text" placeholder="ITEM123"
                                   aria-describedby="supItemIdHelp" maxLength="10" value={this.state.supItemId} onChange={this.onChange} required={true} />
                            <small id="supItemIdHelp" className="form-text text-muted">Application will check whether new item id already exists</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="itemName" className="text-white">Item Name</label>
                            <input id="itemName" className="form-control" type="text" placeholder="ABC Hardware"
                                   aria-describedby="itemNameHelp" maxLength="20" value={this.state.itemName} onChange={this.onChange} required={true}/>
                            <small id="itemNameHelp" className="form-text text-muted">Enter supplier's name or company name here</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="unitPrice" className="text-white">Unit Price</label>
                            <input id="unitPrice" className="form-control" type="number" step={0.01} placeholder="0.00"
                                   value={this.state.unitPrice} onChange={this.onChange} required={true}/>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Save</button>
                        <span> </span>
                        <button type="button" className="btn btn-outline-secondary" onClick={this.onClear}>Clear</button>
                    </form>
                </div>
            </div>
        );
    }
}