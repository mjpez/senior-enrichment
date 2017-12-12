import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink, withRouter} from 'react-router-dom'

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import AddBox from 'material-ui/svg-icons/content/add-box'
import Subheader from 'material-ui/Subheader';
import Forward from 'material-ui/svg-icons/content/forward';
import { blueGrey600 } from 'material-ui/styles/colors';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '10px'
  },
  gridList: {
    width: 900,
    height: 675,
    overflowY: 'auto',
  },
  sh: {
    color: blueGrey600,
    fontSize: '30px',
  }
};

export class CampusList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div style={styles.root}>
          <GridList
            cellHeight={300}
            cols={3}
            style={styles.gridList}
          >
            <Subheader style={styles.sh}>MH Campuses</Subheader>
            {this.props.campuses.map((campus) => (
              <GridTile
                key={campus.id}
                title={campus.name}
                subtitle={<span><b>{campus.description}</b></span>}
                actionIcon={
                  <NavLink to={`/campuses/${campus.id}`}>
                    <IconButton><Forward color="white" /></IconButton>
                  </NavLink>
                }
              >
                  <img src={campus.imageUrl} />
              </GridTile>
            ))}
            <GridTile
              key={this.props.campuses.length}
              title='New Campus'
              subtitle={<span><b>Establish a New Campus</b></span>}
              actionIcon={
                <NavLink to='new-campus'>
                  <IconButton><Forward color="white" /></IconButton>
                </NavLink>
              }
            >
              <img src='https://vignette.wikia.nocookie.net/aliens/images/d/d1/Hoth.jpg/revision/latest?cb=20090609194109' />
            </GridTile>
          </GridList>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    campuses: state.campuses
  }
}



const CampusListContainer = connect(mapStatetoProps)(CampusList)
export default CampusListContainer
