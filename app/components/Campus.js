import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import StudentList from './StudentList'
import store from '../store'
import IconButton from 'material-ui/IconButton'
import DeleteForever from 'material-ui/svg-icons/action/delete-forever'

import { deleteCampus } from '../reducers/campusesReducer'


export class Campus extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const campus = (this.props.campuses.filter(campus => {
      return campus.id === Number(this.props.match.params.campusId)
    }))
    return (
      <div>
        {campus.map(selected => {
          return (
            <div key={selected.id}>
              <h1>{selected.name}</h1>
              <h3>{selected.description}</h3>
              <img height='360' width='400' src={selected.imageUrl} />
            </div>
          )
        })}
        <StudentList />
        <br/>
        <div>
          <h3>Delete Campus? (Can not be reversed)</h3>
          <IconButton onClick={this.props.handleDelete}>
            <DeleteForever />
          </IconButton>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleDelete(event) {
      return store.dispatch(deleteCampus(ownProps.match.params.campusId, ownProps.history))
    }
  }
}

const CampusContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Campus))

export default CampusContainer
