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
            detailView: false,
            activeColor: 'red',
            offset: 15,
            start: 0,
            end: 15,
            activeColorsDetail: [],
            row1: [],
            row2: [],
            row3: [],
        }
        this.handleColorChange = this.handleColorChange.bind(this);
        this.detailViewToggle = this.detailViewToggle.bind(this);
        this.changeDetailColors = this.changeDetailColors.bind(this);
        this.setNewRows = this.setNewRows.bind(this);
        this.changePage = this.changePage.bind(this);
        this.getRandomColor = this.getRandomColor.bind(this);
    }

        handleColorChange(event) {
            let { className } = event.target;
            className? className = className.split(' ')[0]
                :null;
    

            (className === 'one' || className === 'two' || className === 'three')? 
                this.changeDetailColors(className)
                : null;            

            const activeColor = event.target.id
            this.setState({activeColor})
            this.detailViewToggle(event); 
        }

        changeDetailColors(className) {
            const { row1, row2, row3 } = this.state;
            let active =  [];
            (className === 'one')? active = row1
                :(className === 'two')? active = row2
                    :active = row3;

            this.setState({
                activeColorsDetail: active,
            })
        }

        getRandomColor(event) {
           const randomNumber = Math.floor(Math.random() * (128 - 1)) + 1;
           console.log(randomNumber);
           const activeColor = colorData[randomNumber];
           this.setState({activeColor: activeColor.hex})
           this.detailViewToggle(event)
        }

        setNewRows() {
            let row1 = []
            let row2 = []
            let row3 = []
            let { offset, start, end } = this.state;
            
            for ( let i = start; i < (start+offset) ; i++){
                (i < (start + 5))? row1.push({hex : colorData[i].hex})
                    :( i < (start + 10))? row2.push({hex: colorData[i].hex})
                        :row3.push({hex: colorData[i].hex});
            }

            this.setState({
                row1: row1,
                row2: row2,
                row3: row3,
                activeColorsDetail: row1,
            })
        }

        detailViewToggle(event) {
            (event.target.id === 'clear-detail' || event.target.id ==='clear-text')?
            this.setState({detailView: false})
            :this.setState({detailView: true});
        }

        changePage(event) {
            console.log(event.target.id, ': change page')
            let num = parseInt(event.target.id)
            let { start, end, offset} = this.state;
            start = ((num * offset));
            end = (start + offset);
            console.log(end, ': start type of')
            this.setState({
                start: start,
                end: end,
            })
            setTimeout(()=>{
                this.setNewRows()
            }, 200)
        }

        componentWillMount() {
            this.setNewRows()
        }
    render() {
      return(
	<div className='landing-container'>
		<NavBar />
        <Aside
            handleColorChange={this.handleColorChange}
            getRandomColor={this.getRandomColor}
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
            rows={[this.state.row1, this.state.row2, this.state.row3]}
            rows1={this.state.row1}
            rows2={this.state.row2}
            rows3={this.state.row3}
            changePage={this.changePage}
        />
	</div>
	
      );
    }
  }