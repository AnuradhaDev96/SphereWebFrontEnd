import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ManageSuppliers from './UIcomponents/Admin/manageSupppliers'
import AddSuppliers from "./UIcomponents/Admin/addSupplier";
import Home from "./UIcomponents/Admin/homeComp";
import ManageSiteManagers from "./UIcomponents/SiteManager/ManageSiteManagers";
import AddSiteManagers from "./UIcomponents/SiteManager/AddSiteManagers";
import EditSuppliers from "./UIcomponents/Admin/editSupplier";
import AddSupplierItems from "./UIcomponents/Admin/addSupplierItems";
import AddInventoryItem from "./UIcomponents/Admin/addInventoryItem";



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

                    {/*Anuradha - Components*/}
                    <Route path="/suppliers" component={ManageSuppliers}/>
                    <Route path="/add" component={AddSuppliers}/>

                    <Route path="/addSiteManagers" component={AddSiteManagers}/>
                    <Route path="/addSupplier" component={AddSuppliers}/>
                    <Route path="/editSupplier/:id" component={EditSuppliers}/>
                    <Route path="/addSupplierItems/:id" component={AddSupplierItems}/>
                    <Route path="/addInventoryItem" component={AddInventoryItem}/>



                    {/*Umesh - Components*/}
                    <Route path="/siteManagers" component={ManageSiteManagers}/>




                    {/*Nethmini - Components*/}







                    {/*Navodya - Components*/}


                    





                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;