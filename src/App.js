import React, { Fragment } from 'react';
import Routes from './routes'
import './_app.scss'

export default class App extends React.Component {
  render() {

    return (
        <Fragment>
            <Routes />
        </Fragment>
    );
  }
}
