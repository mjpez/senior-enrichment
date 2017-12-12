import axios from 'axios'

// Action Type
const GET_CAMPUSES = 'GET_CAMPUSES'
const CREATE_CAMPUS = 'CREATE_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'

// Action Creator
export function getCampuses(campuses) {
  const action = {
    type: GET_CAMPUSES,
    campuses
  }
  return action
}

export function createCampus(campus) {
  const action = {
    type: CREATE_CAMPUS,
    campus
  }
  return action
}

export function deleteCampusAC(campus) {
  const action = {
    type: DELETE_CAMPUS,
    campus
  };
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

export function postCampus(campus, history) {
  return function thunk(dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        const action = createCampus(newCampus)
        dispatch(action)
        history.push('/campuses/')
      })
      .catch(console.error)
  };
}

export function deleteCampus(campusId, history) {
  return function thunk(dispatch) {
    return axios.delete(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then((campuses) => {
        const action = getCampuses(campuses)
        dispatch(action)
        history.push('/campuses/')
      })
      .catch(console.error)
  }
}

// Reducer
const campusesReducer = function (state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses
    case CREATE_CAMPUS:
      return [...state, action.campus]
    default:
      return state
  }
};

export default campusesReducer
