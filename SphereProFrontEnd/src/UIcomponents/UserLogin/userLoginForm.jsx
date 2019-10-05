import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import LoggedUserService from "./LoggedUserService";

export default class UserLoginForm extends Component {
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
        axios.get('http://localhost:1218/db/User/login/' + this.state.username + '/' + this.state.password).then(response => {
            if(response.data.statusCode === 200){
                // this.setState({
                //     requestId: response.data.data.requestId,
                //     totalAmount: response.data.data.totalAmount,
                //     createdBy: response.data.data.createdBy,
                //     requestStatus: response.data.data.requestStatus,
                //     deliverDate: response.data.data.deliverDate
                // });
                this.loggedUserService.setUserDetails('Success', response.data.data.user_name, response.data.data.role);
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
                    <form className="border border-light p-5" onSubmit={this.onLogin}>
                        <h2 className="text-center h1 mb-1">Sphere Procurement Management System</h2>
                        <h3 className="text-center">Login</h3>
                        <div className="form-group">
                            <label htmlFor="username" className="">Username</label>
                            <input id="username" className="form-control" type="text" placeholder="username"
                                   maxLength="10" value={this.state.username} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" className="form-control" type="text" placeholder="password"
                                    value={this.state.password} onChange={this.onChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}