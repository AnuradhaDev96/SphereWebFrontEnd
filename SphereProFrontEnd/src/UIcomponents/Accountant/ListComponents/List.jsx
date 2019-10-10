import axios from 'axios';
import React, {Component} from 'react';
import OnePurchaseItem from './RowComponents/OnePurchaseItem'
export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:1218/db/order/getAllOrders').then(response => {
            if(response.data.statusCode === 200){
                this.setState({orders: response.data.data});
            } else{
                alert(response.data.message);
            }
        }).catch(err => {
            alert(err);
        });
    }

    listTableRow() {
        return this.state.orders.map(function (object, index) {
            return <OnePurchaseItem obj = {object} key={index}/>
        })
    }
    render() {
        return (
            <div>
                <div className="p-3">
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th>Purchase Id</th>
                            <th>Request ID</th>
                            <th>Create By</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Manage</th>
                        </tr>
                        </thead>
                        <tbody className="bg-light">
                        {this.listTableRow()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}