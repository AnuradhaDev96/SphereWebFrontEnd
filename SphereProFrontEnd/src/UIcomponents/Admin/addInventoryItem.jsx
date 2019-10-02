import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default class AddInventoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemId: '',
            name: '',
            category:'',
            brand: '',
            description: '',
            source: '',
            maxStock: 0,
            currentStock: 0,
            unit: '',
            status: ''
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
            itemId: this.state.itemId,
            name: this.state.name,
            category: this.state.category,
            brand: this.state.brand,
            description: this.state.description,
            source: this.state.source,
            maxStock: this.state.maxStock,
            currentStock: this.state.currentStock,
            unit: this.state.unit,
            status: this.state.status,
        };
        axios.post('http://localhost:1218/db/Inventory/addNewItem', data, {headers: this.headers}).then(response => {
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
                <div className="card">
                    <form className="border border-light p-5" onSubmit={this.onSave}>
                        <p className="text-center h1 mb-1">Add Items to Inventory</p>
                        <div className="row">
                            <div className="col">
                        <div className="form-group">
                            <label htmlFor="itemId" className="">Item Id</label>
                            <input id="itemId" className="form-control" type="text" placeholder="INT123"
                                   aria-describedby="itemIdHelp" maxLength="10" value={this.state.itemId} onChange={this.onChange} required={true}/>
                            <small id="itemIdHelp" className="form-text text-muted">Application will check whether new supplier id already exists</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Item Name</label>
                            <input id="name" className="form-control" type="text" placeholder="Cement"
                                   aria-describedby="nameHelp" maxLength="20" value={this.state.name} onChange={this.onChange} required={true}/>
                            <small id="nameHelp" className="form-text text-muted">Enter supplier's name or company name here</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select className="custom-select" id="category" value={this.state.category} onChange={this.onChange} required={true}>
                                <option selected={true} value="tools">Tools</option>
                                <option value="electric">Electric Appliances</option>
                                <option value="rawMaterial">Raw Material</option>
                                <option value="protective">Protective Equipment</option>
                                <option value="installations">Installation Equipment</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="brand">Brand Name</label>
                            <input id="brand" className="form-control" type="text"  value={this.state.brand}
                                   onChange={this.onChange} required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Item Description</label>
                            <input id="description" className="form-control" type="text" value={this.state.description}
                                   onChange={this.onChange}/>
                        </div>
                            </div>
                            <div className="col">
                        <div className="form-group">
                            <label htmlFor="source">Source of Item</label>
                            <select className="custom-select" id="source" value={this.state.source} onChange={this.onChange} required={true}>
                                <option selected={true} value="delivers">From Delivery</option>
                                <option value="donations">From Donations</option>
                                <option value="manual">Manual Input</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="maxStock">Maximum Stock</label>
                            <input id="maxStock" className="form-control" type="number" value={this.state.maxStock}
                                   onChange={this.onChange} required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="currentStock">Maximum Stock</label>
                            <input id="currentStock" className="form-control" type="number" value={this.state.currentStock}
                                   onChange={this.onChange} required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="unit">Measuring Unit</label>
                            <input id="unit" className="form-control" type="text" value={this.state.unit}
                                   onChange={this.onChange} required={true}/>
                        </div>
                        <select className="custom-select" id="status" value={this.state.status} onChange={this.onChange} required={true}>
                            <option selected={true} value="active">Active</option>
                            <option value="block">Block</option>
                        </select>
                        <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}




//maxlengths