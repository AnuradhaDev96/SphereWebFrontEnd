import React, {Component} from 'react';

export default class OneSupplierItem extends Component {
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
            <td>{this.props.obj.requestStatus}</td>
        </tr>
        );
    }
}