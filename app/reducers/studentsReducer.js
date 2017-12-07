import axios from 'axios'

// Action Type
const GET_STUDENTS = 'GET_STUDENTS'

// Action Creator
export function getStudents(students) {
  const action = {
    type: GET_STUDENTS,
    students
  }
  return action
}

// Thunk Creator
export function fetchStudents() {
  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students)
        dispatch(action)
      })
      .catch(console.error)
  }
}

// Reducer
const studentsReducer = function (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students
    default:
      return state
  }
}

export default studentsReducer
