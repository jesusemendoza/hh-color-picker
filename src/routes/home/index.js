import React from 'react';
import './_home.scss';
import NavBar from '../../components/nav-bar'
import Aside from '../../components/aside'
import Detail from '../../components/detail'
import PageView from '../../components/page-view'
import { colorData } from '../../assets/color-data'

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            detailView: true,
            activeColor: 'red',
            offset: 5,
            start: 0,
            end: 5,
            activeColorsDetail: [],
        }
        this.handleColorChange = this.handleColorChange.bind(this);
        this.detailViewToggle = this.detailViewToggle.bind(this);
        this.changeDetailColors = this.changeDetailColors.bind(this);
    }

        handleColorChange(event) {
            console.log(event.target)
            const activeColor = event.target.id
            this.setState({activeColor})
            this.detailViewToggle(event);
        }

        changeDetailColors() {
            let activeColorsDetail =  []
            let {offset, start, end} = this.state;
            for (let i = start; i < end; i++){
                activeColorsDetail.push({hex : colorData[i].hex})
            }
            this.setState({
                activeColorsDetail: activeColorsDetail,
                start: start + offset,
                end : end + offset,
            })
            console.log(this.state.activeColorsDetail)
        }

        detailViewToggle(event) {
            console.log(event.target.class);
            (event.target.id === 'clear-detail' || event.target.id ==='clear-text')?
            this.setState({detailView: false})
            :this.setState({detailView: true});
        }

        componentWillMount() {
            this.changeDetailColors()
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
            activeColorsDetail={this.state.activeColorsDetail}
        />
        <PageView 
            handleColorChange={this.handleColorChange}
            activeColor={this.state.activeColor}
            detailView={this.state.detailView}
            detailViewToggle={this.detailViewToggle}
            activeColorsDetail={this.state.activeColorsDetail}
        />
	</div>
	
      );
    }
  }