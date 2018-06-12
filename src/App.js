import React, { Fragment } from 'react';
import Routes from './routes'
import './_app.scss'

import { grey800 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
  render() {
    const muiTheme = getMuiTheme({
        palette: {
          textColor: grey800,
        },
        fontFamily: 'Roboto, sans-serif',
        textField: {
          focusColor: 'rgb(138, 126, 190)',
          borderColor: grey800,
        },
      });
    return (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Fragment>
            <Routes />
        </Fragment>
    </MuiThemeProvider>

    );
  }
}
