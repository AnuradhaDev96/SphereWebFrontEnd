import React, {Component} from 'react';
import RequestList from "./ListComponent/RequestList"

export default class ManageRequest extends Component {
    componentDidMount() {
        console.log("In manage orders");
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Purchase Requests</h1>
                    <RequestList/>
                </div>
            </div>
        );
    }
}