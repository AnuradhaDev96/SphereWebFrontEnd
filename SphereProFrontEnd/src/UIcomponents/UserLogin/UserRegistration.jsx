import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default class UserRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            user_name: '',
            pass_word:'',
            contact_no: '',
            role: ''
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
            user_name: this.state.user_name,
            pass_word: this.state.pass_word,
            contact_no: this.state.contact_no,
            role: this.state.role
        };
        axios.post('http://localhost:1218/db/User/register', data, {headers: this.headers}).then(response => {
            if (response.data.statusCode === 200) {
                window.location.href = '/login';
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
                        <h2 className="text-center h1 mb-1">Sphere Procurement Management System</h2>
                        <h3 className="text-center">Regiter User</h3>
                        <div className="form-group">
                            <label htmlFor="id" className="">User Id</label>
                            <input id="id" className="form-control" type="number"
                                   maxLength="10" value={this.state.id} onChange={this.onChange} required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_name">Username</label>
                            <input id="user_name" className="form-control" type="text"
                                   value={this.state.user_name} onChange={this.onChange} required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass_word">Password</label>
                            <input id="pass_word" className="form-control" type="text"
                                   value={this.state.pass_word} onChange={this.onChange} required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact_no">Contact No</label>
                            <input id="contact_no" className="form-control" type="text"
                                   value={this.state.contact_no} onChange={this.onChange} required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact_no">Contact No</label>
                            <input id="contact_no" className="form-control" type="text"
                                   value={this.state.contact_no} onChange={this.onChange} required={true}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        );
    }
}