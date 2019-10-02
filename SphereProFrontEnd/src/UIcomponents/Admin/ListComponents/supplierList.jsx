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
            if(response.data.statusCode === 200){
                this.setState({suppliers: response.data.data});
            } else{
               alert(response.data.message);
            }
        }).catch(err => {
            alert(err);
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
                <table className="table table-sm ">
                    <thead className="thead-dark">
                    <tr>
                        <th>Supplier Id</th>
                        <th>Supplier</th>
                        <th>Address</th>
                        <th>Contact No</th>
                        <th>Email</th>
                        <th>Manage</th>
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