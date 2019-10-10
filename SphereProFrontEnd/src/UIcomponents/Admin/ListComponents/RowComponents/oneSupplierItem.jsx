import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default class OneSupplierItem extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(){
        axios.delete('http://localhost:1218/db/Supplier/deleteSups/' + this.props.obj.supplierId).then(response => {
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
        <tr key = {this.props.obj.supplierId}>
            <td>{this.props.obj.supplierId}</td>
            <td>{this.props.obj.name}</td>
            <td>{this.props.obj.address}</td>
            <td>{this.props.obj.contactNo}</td>
            <td>{this.props.obj.email}</td>
            <td>
                <Link to={"/editSupplier/" + this.props.obj.supplierId} className="btn btn-success btn-sm" >View</Link>
                <span> </span>
                <button onClick={this.delete} className="btn btn-danger btn-sm">Delete</button>
            </td>
        </tr>
        );
    }
}