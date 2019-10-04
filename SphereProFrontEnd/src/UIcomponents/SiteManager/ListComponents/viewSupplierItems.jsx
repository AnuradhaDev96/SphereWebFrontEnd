import axios from 'axios';
import React, {Component} from 'react';
import OndeSupItemRow from './RowComponents/OneSupItemRow'

export default class ViewSupplierItems extends Component {
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

    listTableRow(requestId,parentStatus) {
        return this.state.suppliersItems.map(function (object, index) {
            return <OndeSupItemRow obj = {object} key={index} requestId={requestId} parentStatus={parentStatus}/>
        })
    }
    render() {
        return (
            <div>
                <div>
                    <h4 className="text-center">Items of Supplier</h4>
                    <span className="badge badge-warning">{this.state.isSupplierItemsFound}</span>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Supplier Item Id</th>
                            <th>Supplier Id</th>
                            <th>Item Name</th>
                            <th>Unit Price</th>
                            <th className="col-sm-12">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.listTableRow(this.props.obj.requestId,this.props.obj.parentStatus)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}