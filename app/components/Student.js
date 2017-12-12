import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import store from '../store'
import IconButton from 'material-ui/IconButton'
import AddBox from 'material-ui/svg-icons/content/add-box'
import Delete from 'material-ui/svg-icons/action/delete'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

export class Student extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const student = (this.props.students.filter(student => {
      return student.id === Number(this.props.match.params.studentId)
    }))
    return (
      <div>
        <Table selectable={false}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Campus</TableHeaderColumn>
              <TableHeaderColumn>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {student.map(selected => {
              return (
                <TableRow key={selected.id}>
                  <TableRowColumn>{selected.id}</TableRowColumn>
                  <TableRowColumn>{selected.name}</TableRowColumn>
                  <TableRowColumn>{selected.campus.name}</TableRowColumn>
                  <TableRowColumn>
                    <IconButton><Delete /></IconButton>
                  </TableRowColumn>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <div>
          <NavLink to='/new-student'>
            <IconButton><AddBox /></IconButton>
          </NavLink>
          <span>Edit Student Information</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

const StudentContainer = connect(mapStateToProps)(Student)

export default StudentContainer
