//Created By Anuradha
//Screen 1 of creating purchase request - list view to show the suppliers for SITE MANAGER
import axios from 'axios';
import React, {Component} from 'react';
import OneSupplierRow from './RowComponents/oneSupplierRow'
export default class ViewSuppliers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suppliers: [],
            requestId: this.props.obj.requestId
        }
    }

    componentDidMount() {
        axios.get('http://localhost:1218/db/Supplier/getAllSups').then(response => {
            if(response.data.statusCode === 200){
                this.setState({suppliers: response.data.data});
            } else{
                alert(response.data.message);
            }
        }).catch(err => {
            alert(err);
        });
    }

    listTableRow(req) {
        return this.state.suppliers.map(function (object, index) {
            return <OneSupplierRow obj = {object} key={index} requestId={req}/>
        })
    }
    render() {
        return (
            <div>
                <div>
                    <table className="table table-sm ">
                        <thead className="thead-dark">
                        <tr>
                            <th>Supplier Id</th>
                            <th>Supplier</th>
                            <th>Address</th>
                            <th>Contact No</th>
                            <th>Email</th>
                            <th>View Items and Prices</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.listTableRow(this.state.requestId)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}