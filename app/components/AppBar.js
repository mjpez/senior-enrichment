import React from 'react';
import {NavLink} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import People from 'material-ui/svg-icons/social/people';
import School from 'material-ui/svg-icons/social/school';
import Home from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';
import { blueGrey600 } from 'material-ui/styles/colors';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const AppBarExampleIconButton = () => (
  <AppBar
    title={<span style={styles.title}>Margaret Hamilton Interplanetary Academy of JavaScript</span>}
    iconElementLeft={
      <div>
        <NavLink to='/campuses'>
          <IconButton><Home color="blueGrey100" /></IconButton>
        </NavLink>
      </div>
    }
    iconElementRight={
      <div>
        <NavLink to='/campuses'>
          <IconButton><School color="blueGrey100" /></IconButton>
        </NavLink>
        <NavLink to='/students'>
          <IconButton><People color="blueGrey100" /></IconButton>
        </NavLink>

      </div>
    }
  />
);

export default AppBarExampleIconButton;
