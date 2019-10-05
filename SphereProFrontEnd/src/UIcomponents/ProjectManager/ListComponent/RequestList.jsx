import axios from 'axios';
import React, {Component} from 'react';
import OnePurchaseRequest from './RowComponent/OnePurchaseRequest'
export default class RequestList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:1218/db/PurchReq/getNeedApprovalPurch').then(response => {
            if(response.data.statusCode === 200){
                this.setState({request: response.data.data});
            } else{
                alert(response.data.message);
            }
        }).catch(err => {
            alert(err);
        });
    }

    listTableRow() {
        return this.state.request.map(function (object, index) {
            return <OnePurchaseRequest obj = {object} key={index}/>
        })
    }
    render() {
        return (
            <div>
                <div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Request Id</th>
                            <th>Total Amount</th>
                            <th>Create By</th>
                            <th>Request Status</th>
                            <th>Delivery Date</th>
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