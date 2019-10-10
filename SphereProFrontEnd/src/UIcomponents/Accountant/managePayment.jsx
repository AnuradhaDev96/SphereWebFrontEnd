import React, {Component} from 'react';
import PaymentList from "./ListComponents/paymentList"

export default class ManagePayments extends Component {
    componentDidMount() {
        console.log("In manage pays");
    }

    render() {
        return (
            <div>
                <div>
                    <h1 className="text-white text-center p-3">Payments</h1>
                    <PaymentList/>
                </div>
            </div>
        );
    }
}