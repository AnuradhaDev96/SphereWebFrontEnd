import React, {Component} from 'react';
import PurchaseRequestList from "./ListComponents/PurchaseRequestList";


export default class DisplayRequestList extends Component {
    componentDidMount() {
        console.log("In manage Requests");
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Purchase Requests</h1>
                    <PurchaseRequestList/>
                </div>
            </div>
        );
    }
}