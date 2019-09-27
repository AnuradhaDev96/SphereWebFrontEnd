import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default class OneSiteManagerItem extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(){
        axios.delete('http://localhost:1218/db/SiteManagers/deleteSManagers/' + this.props.obj.smanagerNo).then(response => {
            if (response.data.statusCode === 200) {
                alert(response.data.message);
                window.location.reload();
            } else {
                alert(response.data.message);
            }
        }).catch(err => {
            alert(err);
        });
    }
    render() {
        return (
            <tr key = {this.props.obj.smanagerNo}>
                <td>{this.props.obj.smanagerNo}</td>
                <td>{this.props.obj.sname}</td>
                <td>{this.props.obj.snic}</td>
                <td>{this.props.obj.scontactNo}</td>
                <td>{this.props.obj.site}</td>
                <td>{this.props.obj.approvedValue}</td>
                <td>
                    <Link to={"/editSiteManagers/" + this.props.obj.smanagerNo} className="btn btn-success" >Edit</Link>
                    <span> </span>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}