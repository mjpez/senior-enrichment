import React, { Component } from 'react'
import { fetchCampuses } from '../reducers/campusesReducer'
import { fetchStudents } from '../reducers/studentsReducer'
import {Switch, Route} from 'react-router-dom'
import store from '../store'
import AppBar from './AppBar'
import CampusList from './CampusList'
import StudentList from './StudentList'
import NewStudentEntry from './NewStudentEntry'
import NewCampusEntry from './NewCampusEntry'
import Student from './Student'
import Campus from './Campus';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { blueGrey100, blueGrey600 } from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey600,
    alternateTextColor: blueGrey100,
    textColor: blueGrey100
  }
})

export default class Main extends Component {
  componentDidMount() {
    const campusesThunk = fetchCampuses()
    store.dispatch(campusesThunk)

    const studentsThunk = fetchStudents()
    store.dispatch(studentsThunk)
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <AppBar />
            <main>
              <Switch>
                <Route path='/new-student' component={NewStudentEntry}/>
                <Route path='/students/:studentId' component={Student}/>
                <Route path='/students' component={StudentList}/>
                <Route path='/new-campus' component={NewCampusEntry}/>
                <Route path='/campuses/:campusId' component={Campus} />
                <Route path='/campuses' component={CampusList}/>
                <Route component={CampusList}/>
              </Switch>
            </main>
          </div>
      </MuiThemeProvider>
    )
  }
}
