import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default class OnePurchaseRequestItem extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <tr key = {this.props.obj.requestId}>
                <td>{this.props.obj.requestId}</td>
                <td>{this.props.obj.totalAmount}</td>
                <td>{this.props.obj.createdBy}</td>
                <td>{this.props.obj.requestStatus}</td>
                <td>{this.props.obj.deliverDate}</td>
                <td>
                    <Link to={"/order/" + this.props.obj.requestId} className="btn btn-success" >Create Order</Link>

                </td>
            </tr>
        );
    }
}