import axios from 'axios'

// Action Type
const GET_CAMPUSES = 'GET_CAMPUSES'

// Action Creator
export function getCampuses(campuses) {
  const action = {
    type: GET_CAMPUSES,
    campuses
  }
  return action
}

// Thunk Creator
export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses)
        dispatch(action)
      })
      .catch(console.error)
  }
}

// Reducer
const campusesReducer = function (state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses
    default:
      return state
  }
};

export default campusesReducer
