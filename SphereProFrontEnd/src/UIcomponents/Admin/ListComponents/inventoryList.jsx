import axios from 'axios';
import React, {Component} from 'react';
import OneInventoryItem from './RowComponents/oneInventoryItem'
export default class InventoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventItems: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:1218/db/Inventory/getAllInventoryItems').then(response => {
            if(response.data.statusCode === 200){
                this.setState({inventItems: response.data.data});
            } else{
                alert(response.data.message);
            }
        }).catch(err => {
            alert(err);
        });
    }

    listTableRow() {
        return this.state.inventItems.map(function (object, index) {
            return <OneInventoryItem obj = {object} key={index}/>
        })
    }
    render() {
        return (
            <div>
                <div>
                    <table className="table table-sm ">
                        <thead className="thead-dark">
                        <tr>
                            <th>Item Id</th>
                            <th>Item Name</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Description</th>
                            <th>Source of Item</th>
                            <th>Maximum Stock</th>
                            <th>Current Stock</th>
                            <th>Measuring Unit</th>
                            <th>Status</th>
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