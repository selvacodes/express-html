import React from "react"
import ReactDOM from "react-dom"
import Tab from "./components/Tab"
import SimpleForm from "./components/Form"
import { getParameterByName } from "./utils/helper"
import { Provider } from "react-redux"

import { store } from "./features/store"

const id = getParameterByName("id")

ReactDOM.render(
      <Provider store={store}>
<div>
    <Tab/>
    <SimpleForm />
</div>
</Provider>, document.getElementById("root"))
