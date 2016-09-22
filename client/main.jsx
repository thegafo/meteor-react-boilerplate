import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import {red700} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


import Navbar from '../imports/ui/Navbar.jsx';

//const muiTheme = getMuiTheme(darkBaseTheme);

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Navbar />
  </MuiThemeProvider>
);

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
