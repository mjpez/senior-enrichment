import React, { Component } from 'react'
import { connect } from 'react-redux'
// import {NavLink, withRouter} from 'react-router-dom'

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Forward from 'material-ui/svg-icons/content/forward';
import { blueGrey600 } from 'material-ui/styles/colors';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
  sh: {
    color: blueGrey600
  }
};

export class CampusList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          <Subheader style={styles.sh}>Campuses</Subheader>
          {this.props.campuses.map((campus) => (
            <GridTile
              key={campus.id}
              title={campus.name}
              subtitle={<span><b>{campus.description}</b></span>}
              actionIcon={<IconButton><Forward color="white" /></IconButton>}
            >
              <img src={campus.imageUrl} />
            </GridTile>
          ))}
        </GridList>
        <div>

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
