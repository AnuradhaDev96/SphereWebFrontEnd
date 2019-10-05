import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default class OnePaymentsItem extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(){
        axios.put('http://localhost:1218/db/Payment/Delete/' + this.props.obj.paymentId).then(response => {
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
            <tr key = {this.props.obj.paymentId}>
                <td>{this.props.obj.paymentId}</td>
                <td>{this.props.obj.purchaseOrderId}</td>
                <td>{this.props.obj.amount}</td>
                <td>{this.props.obj.paidOn}</td>
                <td>{this.props.obj.paidBy}</td>
                <td>{this.props.obj.status}</td>
                <td>
                    {/*<Link to={"/searchPayment/" + this.props.obj.paymentId} className="btn btn-danger" >Delete</Link>*/}
                    {/*<Link to={"/searchPayment/" + this.props.obj.paymentId} className="btn btn-success" >Search</Link>*/}
                    <button onClick={this.delete} disabled={this.props.obj.status === 'BLOCK'} className="btn btn-danger">Delete</button>
                </td>
            </tr>

            // <button onClick={this.delete} className="btn btn-danger">Search</button>
        );




    }

}



