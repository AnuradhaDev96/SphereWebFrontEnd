import React, {Component} from 'react';
import InventoryList from "./ListComponents/inventoryList"

export default class ManageInventory extends Component {
    componentDidMount() {
        console.log("In manage sups");
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Inventory</h1>
                    <InventoryList/>
                </div>
            </div>
        );
    }
}