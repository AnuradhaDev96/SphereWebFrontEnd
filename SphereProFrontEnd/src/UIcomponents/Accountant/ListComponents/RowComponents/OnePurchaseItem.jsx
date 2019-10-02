import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default class OnePurchaseItem extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(){
        axios.delete('http://localhost:1218/db/order/deleteOrders/' + this.props.obj.id).then(response => {
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
            <tr key = {this.props.obj.id}>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.reqId}</td>
                <td>{this.props.obj.createBy}</td>
                <td>{this.props.obj.date}</td>
                <td>{this.props.obj.status}</td>
                <td>
                    <Link to={"/UpdateOrder/" + this.props.obj.id} className="btn btn-success" >View</Link>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}