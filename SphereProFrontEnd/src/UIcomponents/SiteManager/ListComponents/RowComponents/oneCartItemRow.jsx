import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default class OneCartItemRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.delete('http://localhost:1218/db/PurchReq/deleteCartItem/' + this.props.obj.requestItemId + '/' + this.props.obj.requestId + '/' + this.props.obj.supplierId).then(response => {
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
            <tr key = {this.props.obj.requestItemId}>
                <td>{this.props.obj.requestItemId}</td>
                <td>{this.props.obj.requestId}</td>
                <td>{this.props.obj.supplierId}</td>
                <td>{this.props.obj.amount}</td>
                <td>{this.props.obj.subTotal}</td>
                <td>{this.props.obj.deliveryStatus}</td>
                <td>
                    <button onClick={this.delete} disabled={this.props.parentStatus !== 'NEW'} className="btn btn-warning btn-sm">Remove from Cart</button>
                </td>
            </tr>
        );
    }
}