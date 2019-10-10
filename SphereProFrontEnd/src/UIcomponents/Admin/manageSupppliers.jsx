import React, {Component} from 'react';
import SupplierList from "./ListComponents/supplierList"

export default class ManageSuppliers extends Component {
    componentDidMount() {
        console.log("In manage sups");
    }

    render() {
        return (
        <div>
            <div>
                <h1 className="text-white text-center p-5">Suppliers</h1>
                <SupplierList/>
            </div>
        </div>
    );
    }
}