import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LoggedUserService from "./LoggedUserService";

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.loggedUserService = new LoggedUserService();
        this.state = {
            isLoggedIn: this.loggedUserService.isLoggedIn,
            role: this.loggedUserService.Role
        };
    }

    render() {
        return (
            <div className="bg-dark row">
                {
                    (this.state.role === "ADMIN") ? (
                        <div className="form-inline my-2 my-lg-0">
                            <div className="col">
                                <a href="/adminHome">
                                    <span className="badge-warning p-3 text-white font-weight-bold" >Sphere Constructions</span>
                                </a>
                            </div>
                            <div className="col form-inline my-2 my-lg-0"> <span className="text-white col font-weight-bold">LEADERS IN QUALITY CONSTRUCTION AND INFRASTRUCTURE</span></div>
                        </div>

                    ) : (this.state.role === "SITEMNG") ? (
                        <div className="form-inline my-2 my-lg-0">
                            <div className="col">
                                <a href="/siteManagerHome">
                                    <span className="badge-warning p-3 text-white font-weight-bold" >Sphere Constructions</span>
                                </a>
                            </div>
                            <div className="col form-inline my-2 my-lg-0"> <span className="text-white col font-weight-bold">LEADERS IN QUALITY CONSTRUCTION AND INFRASTRUCTURE</span></div>
                        </div>
                    ) : (this.state.role === "PROJECTMNG") ? (
                        <div className="form-inline my-2 my-lg-0">
                            <div className="col">
                                <a href="/projectManagerHome">
                                    <span className="badge-warning p-3 text-white font-weight-bold" >Sphere Constructions</span>
                                </a>
                            </div>
                            <div className="col form-inline my-2 my-lg-0"> <span className="text-white col font-weight-bold">LEADERS IN QUALITY CONSTRUCTION AND INFRASTRUCTURE</span></div>
                        </div>
                    ): (this.state.role === "ACCOUNTANT") ? (
                        <div className="form-inline my-2 my-lg-0">
                            <div className="col">
                                <a href="/accountantHome">
                                    <span className="badge-warning p-3 text-white font-weight-bold" >Sphere Constructions</span>
                                </a>
                            </div>
                            <div className="col form-inline my-2 my-lg-0"> <span className="text-white col font-weight-bold">LEADERS IN QUALITY CONSTRUCTION AND INFRASTRUCTURE</span></div>
                        </div>
                    ): window.location.href = "/login"
                }
                    <button className="text-white btn-dark col" onClick={this.loggedUserService.logout}>Log Out
                    </button>
            </div>)
    };
}