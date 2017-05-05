import { SIGNIN_SHOW , SIGNUP_SHOW } from "../actions"

export function showSignIn() {
  return {
    type: SIGNIN_SHOW
  }
}

export function showSignUp() {
  return {
    type:  SIGNUP_SHOW 
  }
}


