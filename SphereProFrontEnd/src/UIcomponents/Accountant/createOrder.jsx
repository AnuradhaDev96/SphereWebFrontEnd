import React, {Component} from 'react';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import * as ReactDom from "react-dom";
import App from "../../App";
import {Helmet} from 'react-helmet';
import purchase from "./purchase.jpg";
import Dropdown from 'react-dropdown';
import * as ReactDOM from "dropdownlist";
import axios from "axios";


export default class createOrder extends React.Component {

    constructor(props){
        super(props)
        this.state={
            id:'',
            reqId:this.props.match.params.reqId,
            createBy:'',
            date:'',
            status:'',
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
        id: this.state.id,
        reqId: this.state.reqId,
        createBy: this.state.createBy,
        date: this.state.date,
        status: 'OPEN'
    };
    axios.post('http://localhost:1218/db/order/addOrder', data, {headers: this.headers}).then(response => {
        if (response.data.statusCode === 200) {
            alert(response.data.message);
            window.location.href = '/DisplayRequestList';
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
                    <h1 className="text-white text-center"> Add Purchase Orders </h1>
                    <span className="badge badge-primary text-center">Purchase Request {this.state.reqId} will be closed once you create a Purchase Order</span>
                    <form className="p-5" onSubmit={this.onSave}>
                        <div className="form-group">
                            <label htmlFor="id" className="text-white">Purchase Order Id</label>
                            <input id="id" className="form-control" type="text"
                                   aria-describedby="idHelp" maxLength="10" value={this.state.id}
                                   onChange={this.onChange} required={true} />
                            <small id="idHelp" className="form-text text-muted">Application will check whether new order
                                id already exists
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="reqId" className="text-white">Request ID</label>
                            <input id="reqId" className="form-control" type="text"
                                   aria-describedby="reqIdHelp" maxLength="20" value={this.state.reqId}
                                   onChange={this.onChange} required={true} readOnly={true}/>

                        </div>
                        <div className="form-group">
                            <label htmlFor="createBy" className="text-white">Created By</label>
                            <input id="createBy" className="form-control" type="text"
                                   maxLength="10"
                                   value={this.state.createBy} onChange={this.onChange} required={true}/>
                        </div>
                        <div className="form-group" className="text-white">
                            <label htmlFor="date">Date</label>
                            <input id="date" className="form-control" type="date" maxLength="25"
                                   value={this.state.date} onChange={this.onChange}/>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-outline-primary">Create Purchase Order</button>
                    </form>
                </div>
            </div>
        );
    }
}

// list="status" name="status"