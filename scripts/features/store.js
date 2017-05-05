import { createStore, combineReducers } from "redux"
import tabReducer from "../features/Tabs/reducer"

export const rootReducer = combineReducers({
  signIn: tabReducer,
})

export let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
