import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import store from '../store'
import {NavLink} from 'react-router-dom'
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

import NewStudentEntry from './NewStudentEntry'

export class StudentList extends Component {
  constructor(props) {
    super(props)

    this.state = store.getState()
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const campusIdProp = Number(this.props.match.params.campusId)
    const students = this.props.students
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
            {students.filter((student) => {
              if (campusIdProp) {
                return student.campusId === campusIdProp
              } else return true
            }).map(student => {
              return (
                <TableRow key={student.id}>
                  <TableRowColumn>{student.id}</TableRowColumn>
                  <TableRowColumn>
                    <NavLink to={`/students/${student.id}`}>
                      {student.name}
                    </NavLink>
                  </TableRowColumn>
                  <TableRowColumn>
                    <NavLink to={`/campuses/${student.campusId}`}>
                      {student.campus && student.campus.name}
                    </NavLink>
                  </TableRowColumn>
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
          <span>Enroll a New Student</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students,
    ownProps: ownProps
  }
}

const StudentListContainer = withRouter(connect(mapStateToProps)(StudentList))
export default StudentListContainer
