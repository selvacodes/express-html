import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import SimpleForm from "./components/Form"
import { getParameterByName } from "./utils/helper"

const id = getParameterByName("id")

ReactDOM.render(<SimpleForm />, document.getElementById("root"))
