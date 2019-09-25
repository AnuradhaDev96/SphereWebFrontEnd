import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ManageSuppliers from './UIcomponents/Admin/manageSupppliers'
import AddSuppliers from "./UIcomponents/Admin/addSupplier";
import Home from "./UIcomponents/Admin/homeComp";
import EditSuppliers from "./UIcomponents/Admin/editSupplier";
import AddSupplierItems from "./UIcomponents/Admin/addSupplierItems";


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(

            <div>
                <BrowserRouter>
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/suppliers" component={ManageSuppliers}/>
                    <Route path="/addSupplier" component={AddSuppliers}/>















                    




                    <Route path="/editSupplier/:id" component={EditSuppliers}/>
                    <Route path="/addSupplierItems/:id" component={AddSupplierItems}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;