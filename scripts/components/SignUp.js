import React from "react"
import styled from 'styled-components'

const SignUpWrapper = styled.div`
   display: ${props => (props.signIn ? "none" : "block")}
 `


const SignUp = ( { signIn }) => (
  <SignUpWrapper signIn = {signIn}>
   <h1> Sign Up </h1>
  </SignUpWrapper>
)


export default SignUp
