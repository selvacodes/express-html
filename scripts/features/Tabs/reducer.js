import { SIGNIN_SHOW , SIGNUP_SHOW} from "../actions"
import { initialState } from "../state"

const containerState = initialState.signIn

function tabReducer(state = containerState, action) {
  switch (action.type) {
    case SIGNIN_SHOW:
     return true
    case SIGNUP_SHOW:
     return false
    default:
      return state
  }
}

export default tabReducer

export const getSignIn = state => state.signIn
