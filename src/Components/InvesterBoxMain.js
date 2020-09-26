import React, {Component} from "react"
import { Jumbotron, Button} from 'reactstrap';
import { createBrowserHistory as history} from 'history';
import { Link } from 'react-router-dom';

class BoxMain extends Component{
    constructor(props){
        super(props)
        this.name = props.signupType
        this.signUpEvent = this.signUpEvent.bind(this)
    }

    signUpEvent(){
        const name = this.name
        console.log("Tried to Sign in as an Investor" + name)
    }
    render(){
    return(
        <div>
            <Jumbotron>
            <div className="invbox">
            {this.name}'s Box
            <button onClick={this.signUpEvent}> 
            <Link to={() => this.name === "Investor" ? '/invester-signup': '/influencer-signup'}>
                Sign Up as {this.name}
            </Link>
             </button>
            </div>
            </Jumbotron>
        </div>

    )
}}


export default BoxMain;