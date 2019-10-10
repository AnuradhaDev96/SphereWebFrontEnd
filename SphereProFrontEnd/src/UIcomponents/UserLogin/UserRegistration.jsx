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
                <div className="card bg-transparent" >
                    <form className="border border-light p-5" onSubmit={this.onSave}>
                        <h2 className="text-center h1 mb-1 text-white">Sphere Procurement Management System</h2>
                        <h3 className="text-center text-white">Register User</h3>
                        <div className="form-group">
                            <label htmlFor="id" className="text-white">User Id</label>
                            <input id="id" className="form-control" type="number"
                                   maxLength="10" value={this.state.id} onChange={this.onChange} required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_name" className="text-white">Username</label>
                            <input id="user_name" className="form-control" type="text"
                                   value={this.state.user_name} onChange={this.onChange} required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass_word" className="text-white">Password</label>
                            <input id="pass_word" className="form-control" type="text"
                                   value={this.state.pass_word} onChange={this.onChange} required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact_no" className="text-white">Contact No</label>
                            <input id="contact_no" className="form-control" type="text" maxLength="10"
                                   value={this.state.contact_no} onChange={this.onChange} required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="category" className="text-white">Select User Role</label>
                            <select className="custom-select" id="role" value={this.state.role} onChange={this.onChange} required={true}>
                                <option selected={true} value="ADMIN">Admin</option>
                                <option value="PROJECTMNG">Project Manager</option>
                                <option value="SITEMNG">Site Manager</option>
                                <option value="ACCOUNTANT">Accountant</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-info">Register User</button>
                    </form>
                </div>
            </div>
        );
    }
}