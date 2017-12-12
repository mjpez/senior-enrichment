import axios from 'axios'

// Action Type
const GET_STUDENT = 'GET_STUDENT'

// Action Creator
export function getStudent(student) {
  const action = {
    type: GET_STUDENT,
    student
  }
  return action
}

// Thunk Creator
export function fetchStudent() {
  return function thunk(dispatch) {
    return axios.get('/api/students/:studentId')
      .then(res => res.data)
      .then(student => {
        const action = getStudent(student)
        dispatch(action)
      })
      .catch(console.error)
  }
}

// Reducer
const studentReducer = function (state = [], action) {
  switch (action.type) {
    case GET_STUDENT:
      return action.student
    default:
      return state
  }
}

export default studentReducer
