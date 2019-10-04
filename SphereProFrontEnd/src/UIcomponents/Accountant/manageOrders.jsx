import React, {Component} from 'react';
import List from "./ListComponents/List"

export default class manageOrders extends Component {
    componentDidMount() {
        console.log("In manage orders");
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Orders</h1>
                    <List/>
                </div>
            </div>
        );
    }
}