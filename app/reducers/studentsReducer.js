import axios from 'axios'

// Action Type
const GET_STUDENTS = 'GET_STUDENTS'
const CREATE_STUDENT = 'CREATE_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'

// Action Creator
export function getStudents(students) {
  const action = {
    type: GET_STUDENTS,
    students
  }
  return action
}

export function createStudent(student) {
  const action = {
    type: CREATE_STUDENT,
    student
  }
  return action
}

export function deleteStudentAC(student) {
  const action = {
    type: DELETE_STUDENT,
    student
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

export function postStudent(student, history) {
  return function thunk(dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        const action = createStudent(newStudent)
        dispatch(action)
        history.push('/campuses/')
      })
      .catch(console.error)
  };
}

export function deleteStudent(studentId, history) {
  return function thunk(dispatch) {
    return axios.delete(`/api/students/${studentId}`)
      .then(res => res.data)
      .then((students) => {
        const action = getStudents(students)
        dispatch(action)
        history.push('/students/')
      })
      .catch(console.error)
  }
}

// Reducer
const studentsReducer = function (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students
    case CREATE_STUDENT:
      return [...state, action.student]
    default:
      return state
  }
}

export default studentsReducer
