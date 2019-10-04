import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default class OneSupItemRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        // this.validateStatus = this.validateStatus.bind(this);
    }

    delete(){
        // axios.delete('http://localhost:1218/db/SupItems/deleteItem/' + this.props.obj.supItemId + '/' + this.props.obj.supplierId).then(response => {
        //     if (response.data.statusCode === 200) {
        //         alert(response.data.message);
        //         window.location.reload();
        //     } else {
        //         alert(response.data.message);
        //     }
        // }).catch(err => {
        //     alert(err);
        // });
    }

    // validateStatus(requestId, supplierId, supItemId){
    //     if(this.props.parentStatus === 'NEW'){
    //         window.location.href('/addPurchReqItem/' + requestId + "/" + supplierId + "/" + supItemId);
    //     }else {
    //         alert("You are not allow edit this purchase request");
    //     }
    // }

    render() {
        return (
            <tr key = {this.props.obj.supItemId}>
                <td>{this.props.obj.supItemId}</td>
                <td>{this.props.obj.supplierId}</td>
                <td>{this.props.obj.itemName}</td>
                <td>{this.props.obj.unitPrice}</td>
                <td>
                    <Link to={"/addPurchReqItem/" + this.props.requestId + "/" + this.props.obj.supplierId + "/" + this.props.obj.supItemId}  >
                        <button className="btn btn-success btn-sm" disabled={this.props.parentStatus !== 'NEW'}>Add To Cart</button>
                    </Link>

                </td>
            </tr>
        );
    }
}