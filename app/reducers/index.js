/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import campusesReducer from './campusesReducer'
import studentsReducer from './studentsReducer'
import studentReducer from './studentReducer'
import studentEntryReducer from './studentEntryReducer'
import campusEntryReducer from './campusEntryReducer'

const rootReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  student: studentReducer,
  studentEntry: studentEntryReducer,
  campusEntry: campusEntryReducer
})

export default rootReducer
