import React, {Component} from 'react';
import SiteManagerList from './ListComponents/SiteManagerList';

export default class ManageSiteManagers extends Component {
    componentDidMount() {
        console.log("In manage site Managers");
    }

    render() {
        return (
            <div>
                <div>
                    <h1 className="text-center p-5 text-white">Site Managers</h1>
                    <SiteManagerList/>
                </div>
            </div>
        );
    }
}