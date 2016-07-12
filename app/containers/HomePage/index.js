/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */
import React from 'react';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NavBar from 'components/NavBar/index.js'
import Spells from 'components/Spells/index.js'

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <MuiThemeProvider >
          <NavBar />
        </MuiThemeProvider>
        <MuiThemeProvider >
          <Spells />
        </MuiThemeProvider>
      </div>
    );
  }
}
