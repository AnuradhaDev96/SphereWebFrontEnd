//Created By Anuradha
//Screen 1 of creating purchase request - ROW VIEW FOR SUPPLIER VIEW FOR SITE MANAGER
import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default class OneSupplierRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestId: ''
        }
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
                    <Link to={"/addToCart/" + this.props.obj.supplierId + "/" + this.props.requestId} className="btn btn-info btn-sm" >Select Supplier</Link>
                </td>
            </tr>
        );
    }
}