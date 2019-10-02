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
import UpdateOrder from "./UIcomponents/Accountant/UpdateOrder";
import createOrder from "./UIcomponents/Accountant/createOrder";
import AddInventoryItem from "./UIcomponents/Admin/addInventoryItem";
import manageOrders from "./UIcomponents/Accountant/manageOrders";


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


                        <Route path="/addSupplier" component={AddSuppliers}/>
                        <Route path="/addSupplierItems/:id" component={AddSupplierItems}/>
                        <Route path="/editSupplier/:id" component={EditSuppliers}/>
                        <Route path="/addSupplierItems/:id" component={AddSupplierItems}/>
                        <Route path="/addInventoryItem" component={AddInventoryItem}/>



                        {/*Umesh - Components*/}
                        <Route path="/siteManagers" component={ManageSiteManagers}/>
                        <Route path="/addSiteManagers" component={AddSiteManagers}/>
                        <Route path="/editSiteManagers/:id" component={EditSiteManagers}/>


                        {/*Nethmini - Components*/}
                        <Route path="/order" component={createOrder}/>
                        <Route path="/UpdateOrder/:id" component={UpdateOrder}/>
                        <Route path="/manageOrders" component={manageOrders}/>




                        {/*Navodya - Components*/}




                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;