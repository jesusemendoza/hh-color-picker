import React from 'react';
import './_home.scss';
import NavBar from '../../components/nav-bar'
import Aside from '../../components/aside'
import Detail from '../../components/detail'

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            detailView: true,
            activeColor: 'red',
        }
        this.handleColorChange = this.handleColorChange.bind(this);
    }

        handleColorChange(event) {

            console.log(event.target)
            const activeColor = event.target.id
            this.setState({activeColor})
        }
    render() {
      return(
	<div className='landing-container'>
		<NavBar />
        <Aside
            handleColorChange={this.handleColorChange}
        />
        <Detail 
            activeColor={this.state.activeColor}
            detailView={this.state.detailView}
        />
	</div>
	
      );
    }
  }