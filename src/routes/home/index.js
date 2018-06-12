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
        this.detailViewToggle = this.detailViewToggle.bind(this);
    }

        handleColorChange(event) {
            console.log(event.target)
            const activeColor = event.target.id
            this.setState({activeColor})
            this.detailViewToggle(event);
        }

        detailViewToggle(event) {
            console.log(event.target.class);
            (event.target.id === 'clear-detail' || event.target.id ==='clear-text')?
            this.setState({detailView: false})
            :this.setState({detailView: true});
        }
    render() {
      return(
	<div className='landing-container'>
		<NavBar />
        <Aside
            handleColorChange={this.handleColorChange}
        />
        <Detail 
            handleColorChange={this.handleColorChange}
            activeColor={this.state.activeColor}
            detailView={this.state.detailView}
            detailViewToggle={this.detailViewToggle}
        />
	</div>
	
      );
    }
  }