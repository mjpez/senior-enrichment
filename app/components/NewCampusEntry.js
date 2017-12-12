import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import store from '../store'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'

import { writeCampusName, writeCampusDescription, writeCampusImageUrl } from '../reducers/campusEntryReducer';
import { postCampus } from '../reducers/campusesReducer'



export class NewCampusEntry extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      return this.setState(store.getState())
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleSubmit(event) {
    event.preventDefault()

    const submitInfo = this.state.campusEntry
    console.log(submitInfo)

    store.dispatch(postCampus({
      name: submitInfo.name,
      description: submitInfo.description,
      imageUrl: submitInfo.imageUrl
    }, this.props.history))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>New Campus Form</h1>
          <TextField
            name="name"
            value={this.props.campusEntry.name}
            hintText="Name"
            floatingLabelText="Campus Name"
            onChange={this.props.handleChange}
          />
          <br />
          <TextField
            name="description"
            value={this.props.campusEntry.description}
            hintText="Description"
            floatingLabelText="Campus Description"
            onChange={this.props.handleChange}
          />
          <br />
          <TextField
            name="imageUrl"
            value={this.props.campusEntry.imageUrl}
            hintText="URL"
            floatingLabelText="Image URL"
            onChange={this.props.handleChange}
          />
          <br />
          <FlatButton
            type="submit"
            label="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campusEntry: state.campusEntry
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(event) {
      switch (event.target.name) {
        case "name":
          return store.dispatch(writeCampusName(event.target.value))
        case "description":
          return store.dispatch(writeCampusDescription(event.target.value))
        case "imageUrl":
          return store.dispatch(writeCampusImageUrl(event.target.value))
        default:
          return console.log('Hit default')
      }
    }
  }
}

const NewCampusEntryContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCampusEntry))
export default NewCampusEntryContainer
