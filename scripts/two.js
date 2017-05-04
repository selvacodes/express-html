import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { getParameterByName } from "./utils/helper"

const id = getParameterByName("id")

ReactDOM.render(<App header={id} />, document.getElementById("root"))
