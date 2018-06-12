import React from 'react';
import './_home.scss';
import NavBar from '../../components/nav-bar'
import Aside from '../../components/aside'
import Detail from '../../components/detail'

export default class Home extends React.Component {
    render() {
      return(
	<div className='landing-container'>
		<NavBar />
        <Aside />
        <Detail />
	</div>
	
      );
    }
  }