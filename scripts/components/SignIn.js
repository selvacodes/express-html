import React from "react"
import styled from 'styled-components'

const SignInWrapper = styled.div`
   display: ${props => (props.signIn ? "block" : "none")}
 `

const SignIn = ( { signIn }) => (
  <SignInWrapper signIn = {signIn}>
   <h1> Sign In </h1>
  </SignInWrapper>
)

export default SignIn
