import React, { Component } from 'react'
import { connect } from 'react-redux'

export class StudentList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Student List</h1>
        <ul>
          {this.props.students.map(student => {
            return (
              <li key={student.id}>
                <div>{student.name}</div>
                <div>{student.email}</div>
                <div>{student.gpa}</div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.students)
  return {
    students: state.students
  }
}

const StudentListContainer = connect(mapStateToProps)(StudentList)
export default StudentListContainer
