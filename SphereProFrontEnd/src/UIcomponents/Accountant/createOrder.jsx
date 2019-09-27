import React, {Component} from 'react';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import * as ReactDom from "react-dom";
import App from "../../App";
import {Helmet} from 'react-helmet';
import purchase from "./purchase.jpg";
import Dropdown from 'react-dropdown';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import * as ReactDOM from "dropdownlist";
import axios from "axios";


export default class createOrder extends React.Component {

    constructor(props){
        super(props)
        this.state={
            id:'',
            reqId:'',
            createBy:'',
            date:'',
            status:'',
        }

    // handleIdChange=(event)=>{
    //
    //     this.setState({
    //         id:event.target.value
    //     })
    // }
    // handleReqIdChange=(event)=>{
    //     this.setState({
    //         reqId:event.target.value
    //     })
    // }
    // handleCreateChange=(event)=>{
    //     this.setState({
    //         create:event.target.value
    //     })
    // }
    //
    // handleDateChange=(event)=>{
    //     this.setState({
    //         date:event.target.value
    //     })
    // }
    // handleStatusChange=(event)=>{
    //     this.setState({
    //         status:event.target.value
    //     })
    // }
    //
    // componentDidMount() {
    //     console.log('GrandChild did mount.');
    // }
    //


//this checks user credintials are valid or invalid
//     toggle=function(e){
//         const email=this.refs.email.value;
//         const password=this.refs.password.value;
//
//         if(email==='' || password===''){
//             alert('Email or Password Empty');
//         }
//
//         else {
//             var credentials = {"email": email, "password": password};
//             var count = false;

            //calls the backend server which would route this request to the class which handles all request based on the user table
            // fetch('http://localhost:3001/user/' + credentials.email + '/' +
            //     credentials.password, {
            //     method: 'GET',
            //     headers: {'Content-Type': 'application/json'}
            // }).then(response => {
            //     return response.json();
            // }).then(data => {
            //     var user = JSON.stringify(data);
            //     if (user != '[]') {
            //         console.log(user);
            //         count = true;
            //         console.log(data);
            //         for(var user of data){
            //             var name=user.name;
            //             var points=user.loyaltypoints;
            //         }
            //         ReactDom.render(<App name={name} points={points}
            //                              email={email}/>, document.getElementById('root'));
            //     }                 else {
            //         alert("Invalid username or password");
            //     }
            // }).catch(err => {
            //     alert(err);
            // })

    //     }
    // }
    // handleSubmit(e) {
    //
    //     const purchaseOrder = {
    //         "id": e.purchaseOrder.id,
    //         "reqId": e.purchaseOrder.reqId,
    //         "create": e.purchaseOrder.create,
    //         "date": e.purchaseOrder.date,
    //         "status": e.purchaseOrder.status,
    //
    //     };
    //     alert(purchaseOrder.id + "  " + purchaseOrder.reqId + "    "+purchaseOrder.create+"  "+purchaseOrder.date+" "+purchaseOrder.status+" ");
    //
    //     fetch('http://localhost:3000/purchaseOrder/addpurchaseOrder', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(purchaseOrder)
    //     }).then(response => {
    //         console.log(response)
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }
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
        status: this.state.status
    };
    axios.post('http://localhost:1218/db/order/addOrder', data, {headers: this.headers}).then(response => {
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
                <div>
                    <Helmet bodyAttributes={{style: 'background-color : #03062B'}}/>
                    <h1 style={{color: 'gold'}} align="center"> Add Purchase Order </h1>
                    {/*<strong>This text is strong</strong>*/}
                    {/*<center>Add Purchase Order</center>*/}


                </div>
                <br></br>
                <img src={purchase} alt="2" align="left" hspace="50"
                     height={500}
                     wdith={1000}
                />

                <form onSubmit={this.onSave}>
                    <table align="center" cellspacing="1000">
                        <td align="position"valign="position"></td>
                        <tr>
                            {/*<div className="form-group">*/}
                                {/*<label htmlFor="supplierId" className="">Supplier Id</label>*/}
                                {/*<input id="supplierId" className="form-control" type="text" placeholder="SUP123"*/}
                                       {/*aria-describedby="supplierIdHelp" maxLength="10" value={this.state.supplierId} onChange={this.onChange} required={true}/>*/}

                            {/*</div>*/}
                            <div className="form-group">
                                <td width="40%" style={{color: 'gold'}} >  Order ID </td>

                                <td>
                                <input  aria-describedby="supplierIdHelp" className="form-control" id="id" borderBottomWidth="1000" style={{borderColor: 'gold',borderRadius: 25}} type='text' size="40" value={this.state.id}
                                       // onChange={this.handleIdChange}
                                         onChange={this.onChange} required={true} />
                                    <small id="supplierIdHelp" className="form-text text-muted">Application will check whether new supplier id already exists</small>
                                </td>
                            </div>

                        </tr>

                        <br></br>
                        <tr>
                            <div className="form-group">
                                <td style={{color: 'gold'}}>Request ID </td>
                                <td>
                                <input className="form-control" id="reqId"style={{borderColor: 'gold',borderRadius: 25}} type='text' size="40" value={this.state.reqId}
                                       // onChange={this.handleReqIdChange}
                                       onChange={this.onChange}/>
                                </td>
                            </div>
                        </tr>

                        <br></br>
                        <tr>
                            <div className="form-group">
                            <td style={{color: 'gold'}}>Create By</td>
                            <td>
                                <input className="form-control" id="createBy" style={{borderColor: 'gold',borderRadius: 25}} type='text' size="40" value={this.state.createBy}
                                       // onChange={this.handleCreateChange}
                                       onChange={this.onChange}/>
                            </td>
                            </div>
                        </tr>

                        <br></br>

                        <tr>
                            <div className="form-group">
                            <td style={{color: 'gold'}}>Order Status</td>

                            <td>
                                {/*<input style={{borderColor: 'gold',borderRadius: 25}} type='password' size="40" value={this.state.status}*/}
                                <input className="form-control"  style={{borderColor: 'gold',borderRadius: 25}} size='40' list="status" name="status" onChange={this.onChange}/>
                                <datalist id="status">
                                    <option value="Open"/>
                                    <option value="Close"/>
                                    <option value="In Progress"/>

                                </datalist>


                            </td>
                            </div>
                        </tr>
                        <br></br>
                        <tr>
                            <div className="form-group">
                            <td style={{color: 'gold'}}>Delivery Date</td>
                            <td>
                                <input className="form-control" id="date" size="100" style={{borderColor: 'gold',borderRadius:25}} type='date' value={this.state.date}
                                       // onChange={this.handleDateChange}
                                       onChange={this.onChange}/>
                            </td>
                            </div>
                        </tr>
                        <br></br>

                        <button     style={{borderRadius:'50',backgroundColor:'gold',size:'50'}} type="submit" className="btn btn-primary" > Add Order</button>


                    </table>


                </form>

            </div>
        );
    }
}
