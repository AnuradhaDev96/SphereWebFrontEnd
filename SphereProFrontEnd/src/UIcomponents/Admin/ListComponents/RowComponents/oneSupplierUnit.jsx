import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default class OneSupplierItem extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    delete(){
        axios.delete('http://localhost:1218/db/SupItems/deleteItem/' + this.props.obj.supItemId + '/' + this.props.obj.supplierId).then(response => {
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

    showModal() {
        return(
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close"
                                    data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Hello</h4>
                        </div>
                        <div className="modal-body">
                            <p>This is a small modal.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default"
                                    data-dismiss="modal">Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <tr key = {this.props.obj.supItemId}>
                <td>{this.props.obj.supItemId}</td>
                <td>{this.props.obj.supplierId}</td>
                <td>{this.props.obj.itemName}</td>
                <td>{this.props.obj.unitPrice}</td>
                <td>
                    {/*<Link to={"/editSupplier/" + this.props.obj.supplierId} className="btn btn-success btn-sm" >View Item</Link>*/}
                    <button className="btn btn-success btn-sm" data-toggle="modal" data-target="#myModal">View Item</button>
                    <span> </span>
                    <button onClick={this.delete} className="btn btn-danger btn-sm">Delete Item</button>
                </td>

                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close"
                                        data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">{this.props.obj.supItemId}</h4>
                            </div>
                            <div className="modal-body">
                                <p>This is a small modal.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default"
                                        data-dismiss="modal">Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </tr>
        );
    }
}