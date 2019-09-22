import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ManageSuppliers from './UIcomponents/Admin/manageSupppliers'
import AddSuppliers from "./UIcomponents/Admin/addSupplier";
import Home from "./UIcomponents/Admin/homeComp";


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
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;