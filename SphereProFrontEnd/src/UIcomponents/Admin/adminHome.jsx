import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import LoggedUserService from "../UserLogin/LoggedUserService";

export default class AdminHome extends Component {
    constructor(props) {
        super(props);
        this.loggedUserService = new LoggedUserService();
        this.state = {
            username: '',
            password: '',

        }
        this.onChange = this.onChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.id]: e.target.value,
            edit: true
        });
    }

    onLogin(e){
        e.preventDefault();
        axios.get('http://localhost:1218/db/User/login' + this.state.username + '/' + this.state.password).then(response => {
            if(response.data.statusCode === 200){
                // this.setState({
                //     requestId: response.data.data.requestId,
                //     totalAmount: response.data.data.totalAmount,
                //     createdBy: response.data.data.createdBy,
                //     requestStatus: response.data.data.requestStatus,
                //     deliverDate: response.data.data.deliverDate
                // });
                this.loggedUserService.setUserDetails('Success', response.data.data.username, response.data.data.role);
                alert(response.data.message);
            } else{
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
                        <h2 className="text-center h1 mb-1">Sphere Procurement Management System</h2>
                        <h3 className="text-center">Administrator Home Page</h3>
                        <div className="card">
                        <div className="row">
                            <div className="col">
                                <Link to={"/inventory"}>
                                <button type="submit" className="btn btn-primary">View Inventory</button>
                                </Link>
                            </div>
                            <div className="col">
                                <button type="submit" className="btn btn-primary">View Users</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Link to={"/addSupplier"}>
                                <button type="submit" className="btn btn-primary">Add Suppliers</button>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to={"/suppliers"}>
                                <button type="submit" className="btn btn-primary">View Suppliers</button>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Link to={"/addInventoryItem"}>
                                <button type="submit" className="btn btn-primary">Add Inventory Item</button>
                                </Link>
                            </div>
                        </div>

                        </div>


                </div>
            </div>
        );
    }
}