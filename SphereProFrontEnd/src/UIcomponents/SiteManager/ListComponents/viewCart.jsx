import axios from 'axios';
import React, {Component} from 'react';
import OneCartItemRow from './RowComponents/oneCartItemRow'

export default class ViewCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suppliersItems: [],
            isSupplierItemsFound: ''
        }
    }

    componentDidMount() {
        // alert(this.props.obj.supplierId);
        axios.get('http://localhost:1218/db/PurchReq/getCartByPurchReqId/' + this.props.obj.requestId).then(response => {
            if(response.data.statusCode === 200){
                this.setState({suppliersItems: response.data.data});
                if (this.state.suppliersItems.length === 0){
                    this.setState({isSupplierItemsFound: 'Cart of this Purchase Request is Empty'})
                }
            } else{
                alert(response.data.message);
            }
        }).catch(err => {
            alert(err);
        });
    }

    listTableRow(parentStatus) {
        return this.state.suppliersItems.map(function (object, index) {
            return <OneCartItemRow obj = {object} key={index} parentStatus={parentStatus}/>
        })
    }
    render() {
        return (
            <div>
                <div>
                    <h4 className="text-center">Cart Items of Purchase Request</h4>
                    <span className="badge badge-warning">{this.state.isSupplierItemsFound}</span>
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th>Request Item Id</th>
                            <th>Request Id</th>
                            <th>Supplier Id</th>
                            <th>Amount</th>
                            <th>Sub Total</th>
                            <th>Delivery Status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.listTableRow(this.props.obj.parentStatus)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}