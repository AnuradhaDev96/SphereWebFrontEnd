//Created By Anuradha
//Screen 1 of creating purchase request
import React, {Component} from 'react';
import ViewSuppliers from "./ListComponents/viewSuppliers"
import axios from "axios";

export default class AddSupplierToPurch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h1 className="text-center">Create Purchase Request</h1>
                    <h4 className="text-center">Step 2 - Connect Supplier to Purchase Request</h4>
                    <h4>Purchase Request Id<span className="badge badge-primary">{this.props.match.params.id}</span></h4>
                    <ViewSuppliers obj={{requestId:this.props.match.params.id}}/>
                </div>
            </div>
        );
    }
}