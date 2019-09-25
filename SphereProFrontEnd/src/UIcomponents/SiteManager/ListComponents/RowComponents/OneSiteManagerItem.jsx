import React, {Component} from 'react';

export default class OneSiteManagerItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <tr key = {this.props.obj.smanagerNo}>
                <td>{this.props.obj.smanagerNo}</td>
                <td>{this.props.obj.sname}</td>
                <td>{this.props.obj.snic}</td>
                <td>{this.props.obj.scontactNo}</td>
                <td>{this.props.obj.site}</td>
                <td>{this.props.obj.approvedValue}</td>
            </tr>
        );
    }
}