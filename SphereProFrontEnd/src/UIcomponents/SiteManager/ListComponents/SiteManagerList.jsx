import axios from 'axios'
import React, {Component} from 'react';
import OneSiteManagerItem from "./RowComponents/OneSiteManagerItem";

export default class SiteManagerList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            siteManagers: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:1218/db/SiteManagers/getAllSiteManagers').then(response => {
            if(response.data.statusCode === 200){
                this.setState({siteManagers: response.data.data});
            } else{
                alert(response.data.message);
            }
        }).catch(err => {
            alert(err);
        });
    }

    listTableRow() {
        return this.state.siteManagers.map(function (object, index) {
            return <OneSiteManagerItem obj = {object} key={index}/>
        })
    }

    render() {
        return (
            <div>
                <div className="p-3">
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th>SiteManager Id</th>
                            <th>SiteManagers</th>
                            <th>NIC</th>
                            <th>Contact No</th>
                            <th>Site</th>
                            <th>Approved Value</th>
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