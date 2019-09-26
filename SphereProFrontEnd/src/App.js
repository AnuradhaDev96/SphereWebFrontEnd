import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ManageSuppliers from './UIcomponents/Admin/manageSupppliers'
import AddSuppliers from "./UIcomponents/Admin/addSupplier";
import Home from "./UIcomponents/Admin/homeComp";
import ManageSiteManagers from "./UIcomponents/SiteManager/ManageSiteManagers";
import AddSiteManagers from "./UIcomponents/SiteManager/AddSiteManagers";
import EditSuppliers from "./UIcomponents/Admin/editSupplier";
import EditSiteManagers from "./UIcomponents/SiteManager/EditSiteManagers";
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
                    <Route path="/add" component={AddSuppliers}/>
                    <Route path="/siteManagers" component={ManageSiteManagers}/>
                    <Route path="/addSiteManagers" component={AddSiteManagers}/>
                    <Route path="/addSupplier" component={AddSuppliers}/>
                    <Route path="/editSupplier/:id" component={EditSuppliers}/>
                    <Route path="/editSiteManagers/:id" component={EditSiteManagers}/>
                    <Route path="/addSupplierItems/:id" component={AddSupplierItems}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;