/**
*
* NavBar
*
*/

import React from 'react';
import styles from './styles.css';

// material-ui
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <AppBar
          title="dmtools"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                  <MenuItem primaryText="Settings" />
                  <MenuItem primaryText="Help" />
                </IconMenu>
                }
                />
                <Drawer
                  docked={false}
                  open={this.state.open}
                  onRequestChange={(open) => this.setState({open})}
                  >
                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                  </Drawer>
              </div>
    );
  }
}
