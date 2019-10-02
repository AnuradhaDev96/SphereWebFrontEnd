import React, {Component} from 'react';
import SupplierItemList from "./ListComponents/supplierItemList"

export default class ManageSupplierItems extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("In manage sups");
    }

    render() {
        return (
            <div>
                <div>
                    <SupplierItemList obj={this.props.obj}/>
                </div>
            </div>
        );
    }
}