import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {ifStatement} from "@babel/types";

export default class OneInventoryItem extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(){
        // axios.delete('http://localhost:1218/db/Supplier/deleteSups/' + this.props.obj.supplierId).then(response => {
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

    validateStatus(status){
        if (status === 'open'){
            return(
                <span className="badge badge-success">{status}</span>
            );
        } else {
            return(
                <span className="badge badge-warning">{status}</span>
            );
        }

    }

    render() {
        return (
            <tr key = {this.props.obj.itemId}>
                <td>{this.props.obj.itemId}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.category}</td>
                <td>{this.props.obj.brand}</td>
                <td>{this.props.obj.description}</td>
                <td>{this.props.obj.source}</td>
                <td>{this.props.obj.maxStock}</td>
                <td>{this.props.obj.currentStock}</td>
                <td>{this.props.obj.unit}</td>
                <td>{this.validateStatus(this.props.obj.status)}</td>
                {/*<td>*/}
                    {/*<Link to={"/editSupplier/" + this.props.obj.supplierId} className="btn btn-success btn-sm" >View</Link>*/}
                    {/*<button onClick={this.delete} className="btn btn-danger btn-sm">Delete</button>*/}
                {/*</td>*/}
            </tr>
        );
    }
}