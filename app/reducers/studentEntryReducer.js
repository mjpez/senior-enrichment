// Action Type
const WRITE_STUDENT_FIRST_NAME = 'WRITE_STUDENT_FIRST_NAME'
const WRITE_STUDENT_LAST_NAME = 'WRITE_STUDENT_LAST_NAME'
const WRITE_STUDENT_EMAIL = 'WRITE_STUDENT_EMAIL'
const WRITE_STUDENT_GPA = 'WRITE_STUDENT_GPA'
const CHOOSE_STUDENT_CAMPUS = 'CHOOSE_STUDENT_CAMPUS'

// Action Creator
export function writeStudentFirstName(studentFirstName) {
  const action = {
    type: WRITE_STUDENT_FIRST_NAME,
    studentFirstName
  }
  return action
}

export function writeStudentLastName(studentLastName) {
  const action = {
    type: WRITE_STUDENT_LAST_NAME,
    studentLastName
  }
  return action
}

export function writeStudentEmail(studentEmail) {
  const action = {
    type: WRITE_STUDENT_EMAIL,
    studentEmail
  }
  return action
}

export function writeStudentGPA(studentGPA) {
  const action = {
    type: WRITE_STUDENT_GPA,
    studentGPA
  }
  return action
}

export function chooseStudentCampus(studentCampus) {
  const action = {
    type: CHOOSE_STUDENT_CAMPUS,
    studentCampus
  }
  return action
}

// Reducer
const studentEntryReducer = (state = {}, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case WRITE_STUDENT_FIRST_NAME:
      newState.firstName = action.studentFirstName
      return newState
    case WRITE_STUDENT_LAST_NAME:
      newState.lastName = action.studentLastName
      return newState
    case WRITE_STUDENT_EMAIL:
      newState.email = action.studentEmail
      return newState
    case WRITE_STUDENT_GPA:
      newState.gpa = action.studentGPA
      return newState
    case CHOOSE_STUDENT_CAMPUS:
      newState.campus = action.studentCampus
      return newState
    default:
      return state
  }
}

export default studentEntryReducer
