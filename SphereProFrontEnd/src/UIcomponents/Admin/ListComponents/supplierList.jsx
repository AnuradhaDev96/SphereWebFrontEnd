import axios from 'axios';
import React, {Component} from 'react';
import OneSupplierItem from './RowComponents/oneSupplierItem'
export default class SupplierList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suppliers: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:1218/db/Supplier/getAllSups').then(response => {
            const obj = JSON.stringify(response.data);
            console.log(obj);
            this.setState({suppliers: response.data});
        }).catch(err => {
            alert("Sorry! There is an unexpected error." + err);
        });
    }

    listTableRow() {
        return this.state.suppliers.map(function (object, index) {
           return <OneSupplierItem obj = {object} key={index}/>
        })
    }
    render() {
        return (
        <div>
            <div>
                <h4>Suppliers</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Supplier Id</th>
                        <th>Supplier</th>
                        <th>Address</th>
                        <th>Contact No</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.listTableRow()}
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}