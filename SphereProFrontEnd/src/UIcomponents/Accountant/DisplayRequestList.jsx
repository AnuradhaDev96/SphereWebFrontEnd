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
                    <h2 className="text-center text-white p-3">Create Purchase Order for Purchase Request</h2>
                    <PurchaseRequestList/>
                </div>
            </div>
        );
    }
}