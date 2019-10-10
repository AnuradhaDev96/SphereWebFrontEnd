import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import LoggedUserService from "../UserLogin/LoggedUserService";
import NavigationBar from "../UserLogin/navigationBar";

export default class ProjectManagerHome extends Component {
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
                <NavigationBar/>
                <div className="card bg-transparent">
                    <h2 className="text-center h1 mb-1 text-white">Sphere Procurement Management System</h2>
                    <h3 className="text-center text-white">Project Manager Home Page</h3>
                    <div className="card bg-transparent p-5">
                        <div className="row p-3">
                            <div className="col p-1">
                                <Link to={"/ManageRequest"}>
                                <button type="submit" className="btn btn-outline-info btn-lg">Approval/Decline Purchase Requests</button>
                                </Link>
                            </div>
                            <div className="col p-1">
                                <Link to={"/addSiteManagers"}>
                                <button type="submit" className="btn btn-outline-info btn-lg">Create Site Managers</button>
                                </Link>
                            </div>
                        </div>
                        <div className="row p-3">
                            <div className="col p-1">
                                <Link to={"/siteManagers"}>
                                <button type="submit" className="btn btn-outline-info btn-lg">Manage Site Managers</button>
                                </Link>
                            </div>
                            <div className="col p-1">
                                <Link to={"/payments"}>
                                    <button type="submit" className="btn btn-outline-info btn-lg">Purchase History</button>
                                </Link>
                            </div>
                        </div>
                        <div className="row p-3">
                            <div className="col p-1">
                                <Link to={"/suppliers"}>
                                    <button type="submit" className="btn btn-outline-info btn-lg">Manage Suppliers</button>
                                </Link>
                            </div>
                            <div className="col p-1">
                                <Link to={"/manageOrders"}>
                                    <button type="submit" className="btn btn-outline-info btn-lg">View Orders</button>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}