import React, {Component} from "react"
import store from '../Redux/store';
import userAdded from '../Redux/actions'
import { connect } from "react-redux";

class InvestorForm extends Component{
  constructor(props){
    super(props)
    this.state = {
        firstName: '',
        lastName: '',
        username:'',
        password: '',
        investment:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    console.log(this.state)
    this.props.userAdded(this.state)
    this.setState({
    firstName: '',
    lastName: '',
    username:'',
    password: '',
    investment:''

})

    console.log("Hi, Reached Handle Submit", store.getState())

  }

  handleChange(e){
    const {name,value} = e.target
   
    this.setState({[name]: value})

  }


  render(){
    return(
      <div>
        <input
        type = "text"
        name = "firstName"
        placeholder = "First Name"
        onChange = {this.handleChange}
        value = {this.state.firstName} />

      <input
        type = "text"
        name = "lastName"
        placeholder = "Last Name"
        onChange = {this.handleChange}
        value = {this.state.lastName} />

    <input
        type = "text"
        name = "investment"
        placeholder = "Avg. Investment"
        onChange = {this.handleChange}
        value = {this.state.investment} />    

    <input
        type = "text"
        name = "username"
        placeholder = "Username"
        onChange = {this.handleChange}
        value = {this.state.username} />

        <input
          type = "text"
          name = "password"
          placeholder = "Password"
          onChange = {this.handleChange}
          value = {this.state.password} />

          <button type= "Submit" onClick = {this.handleSubmit}> Sign Up </button>
        </div>


    )
  }
}
const mapStateToProps = state => {

  return {
    userLists: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userAdded: storeState => dispatch(userAdded(storeState))
  };
};


export default connect(
  mapStateToProps, // Redux state to component props
  mapDispatchToProps //
)(InvestorForm);
