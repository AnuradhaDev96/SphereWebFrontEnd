import axios from 'axios';
import React, {Component} from 'react';
import OneSupplierUnit from './RowComponents/oneSupplierUnit'

export default class SupplierItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suppliersItems: [],
            isSupplierItemsFound: ''
        }
    }

    componentDidMount() {
        // alert(this.props.obj.supplierId);
        axios.get('http://localhost:1218/db/SupItems/getSupplierBySupId/' + this.props.obj.supplierId).then(response => {
            if(response.data.statusCode === 200){
                this.setState({suppliersItems: response.data.data});
                if (this.state.suppliersItems.length === 0){
                    this.setState({isSupplierItemsFound: 'This Supplier does not has Supplier Items'})
                }
            } else{
                alert(response.data.message);
            }
        }).catch(err => {
            alert(err);
        });
    }

    listTableRow() {
        return this.state.suppliersItems.map(function (object, index) {
            return <OneSupplierUnit obj = {object} key={index}/>
        })
    }
    render() {
        return (
            <div>
                <div>
                    <span className="badge badge-warning">{this.state.isSupplierItemsFound}</span>
                    <table className="table table-sm ">
                        <thead className="thead-dark">
                        <tr>
                            <th>Supplier Item Id</th>
                            <th>Supplier Id</th>
                            <th>Item Name</th>
                            <th>Unit Price</th>
                            <th>Manage</th>
                        </tr>
                        </thead>
                        <tbody className="bg-light">
                        {this.listTableRow()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}