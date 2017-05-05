import React from "react"
import SignIn from './SignIn'
import SignUp from './SignUp'
import { getSignIn } from '../features/Tabs/reducer'
import { connect } from "react-redux"
import { showSignIn , showSignUp } from "../features/Tabs/action_creators.js"


const TabStructure = (props) => (
   <div>
    <a href="#" onClick = {props.showSignIn}  >SignIn</a>
    <a href="#" onClick = {props.showSignUp} >SignUp</a>
    <SignIn {...props} />
    <SignUp {...props}/>
   </div>
  )


const mapStateToProps = state => ({
  signIn: getSignIn(state)
})


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showSignIn: () => {
      dispatch(showSignIn())
    },
    showSignUp : () => {
       dispatch(showSignUp())
    }
  }
}

const Tab = connect(mapStateToProps,mapDispatchToProps)(TabStructure)

export default Tab