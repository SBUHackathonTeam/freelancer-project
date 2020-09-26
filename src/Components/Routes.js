import React, {Component} from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import MainPage from './MainPage';
import InvestorForm from './InvestorForm';
import InfluencerForm from './InfluencerForm';


class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
            <Route exact path = '/' component = {MainPage} />
            <Route exact path = '/invester-signup' component = {InvestorForm} />
            <Route exact path = '/influencer-signup' component = {InfluencerForm} />
            </BrowserRouter>
        )
    }
}

export default Routes;