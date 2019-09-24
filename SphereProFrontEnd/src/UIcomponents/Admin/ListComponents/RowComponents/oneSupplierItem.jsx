import React, {Component} from 'react';

export default class OneSupplierItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
        <tr key = {this.props.obj.supplierId}>
            <td>{this.props.obj.supplierId}</td>
            <td>{this.props.obj.name}</td>
            <td>{this.props.obj.address}</td>
            <td>{this.props.obj.contactNo}</td>
            <td>{this.props.obj.email}</td>
        </tr>
        );
    }
}