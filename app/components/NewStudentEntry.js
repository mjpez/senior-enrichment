import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import store from '../store'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'

import { writeStudentFirstName, writeStudentLastName, writeStudentEmail, writeStudentGPA, chooseStudentCampus } from '../reducers/studentEntryReducer';
import {postStudent} from '../reducers/studentsReducer'



export class NewStudentEntry extends Component {
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

    const submitInfo = this.state.studentEntry

    store.dispatch(postStudent({
      firstName: submitInfo.firstName,
      lastName: submitInfo.lastName,
      email: submitInfo.email,
      gpa: Number(submitInfo.gpa),
      campusId: Number(submitInfo.campus)
    }, this.props.history))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>New Student Form</h1>
          <TextField
            name="firstName"
            value={this.props.studentEntry.firstName}
            hintText="First"
            floatingLabelText="First Name"
            onChange={this.props.handleChange}
          />
          <br />
          <TextField
            name="lastName"
            value={this.props.studentEntry.lastName}
            hintText="Last"
            floatingLabelText="Last Name"
            onChange={this.props.handleChange}
          />
          <br />
          <TextField
            name="email"
            value={this.props.studentEntry.email}
            hintText="Email"
            floatingLabelText="Email Address"
            onChange={this.props.handleChange}
          />
          <br />
          <TextField
            name="gpa"
            value={this.props.studentEntry.gpa}
            hintText="4.0"
            floatingLabelText="GPA"
            onChange={this.props.handleChange}
          />
          <br />
          <SelectField
            floatingLabelText="Campus"
            value={this.props.studentEntry.campus}
            onChange={this.props.handleChange}>

            {this.props.campuses.map(campus => {
              return(
                <MenuItem
                  name="campus"
                  key={campus.id}
                  value={campus.id}
                  primaryText={campus.name} />
              )
            })}
          </SelectField>
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
    campuses: state.campuses,
    studentEntry: state.studentEntry
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(event, index, value) {
      console.log(event, index, value)
      switch (event.target.name) {
        case "firstName":
          return store.dispatch(writeStudentFirstName(event.target.value))
        case "lastName":
          return store.dispatch(writeStudentLastName(event.target.value))
        case "email":
          return store.dispatch(writeStudentEmail(event.target.value))
        case "gpa":
          return store.dispatch(writeStudentGPA(event.target.value))
        default:
          return store.dispatch(chooseStudentCampus(value))
      }
    }
  }
}

const NewStudentEntryContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewStudentEntry))
export default NewStudentEntryContainer
