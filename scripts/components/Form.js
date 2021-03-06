import React from "react"
import PlacesAutocomplete, { geocodeByAddress } from "react-places-autocomplete"

class SimpleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: "" }
    this.onChange = address => this.setState({ address })
  }

  handleFormSubmit(event) {
    event.preventDefault()

    geocodeByAddress(this.state.address, (err, latLng) => {
      if (err) {
        console.log("Oh no!", err)
      }

      console.log(`Yay! Got latitude and longitude for ${this.state.address}`, latLng)
    })
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    }

    return (
      <form onSubmit={ e => this.handleFormSubmit(e)}>
        <PlacesAutocomplete inputProps={inputProps} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default SimpleForm
