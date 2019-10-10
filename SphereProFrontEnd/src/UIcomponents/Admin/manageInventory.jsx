import React, {Component} from 'react';
import InventoryList from "./ListComponents/inventoryList"

export default class ManageInventory extends Component {
    componentDidMount() {
        console.log("In manage sups");
    }

    render() {
        return (
            <div>
                <div className="card bg-transparent p-5">
                    <h1 className="text-white text-center">Inventory</h1>
                    <InventoryList/>
                </div>
            </div>
        );
    }
}