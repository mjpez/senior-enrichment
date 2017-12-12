// Action Type
const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME'
const WRITE_CAMPUS_DESCRIPTION = 'WRITE_CAMPUS_DESCRIPTION'
const WRITE_CAMPUS_IMAGE_URL = 'WRITE_CAMPUS_IMG_URL'

// Action Creator
export function writeCampusName(campusName) {
  const action = {
    type: WRITE_CAMPUS_NAME,
    campusName
  }
  return action
}

export function writeCampusDescription(campusDescription) {
  const action = {
    type: WRITE_CAMPUS_DESCRIPTION,
    campusDescription
  }
  return action
}

export function writeCampusImageUrl(campusImageUrl) {
  const action = {
    type: WRITE_CAMPUS_IMAGE_URL,
    campusImageUrl
  }
  return action
}

// Reducer
const campusEntryReducer = (state = {}, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case WRITE_CAMPUS_NAME:
      newState.name = action.campusName
      return newState
    case WRITE_CAMPUS_DESCRIPTION:
      newState.description = action.campusDescription
      return newState
    case WRITE_CAMPUS_IMAGE_URL:
      newState.imageUrl = action.campusImageUrl
      return newState
    default:
      return state
  }
}

export default campusEntryReducer
