import React from 'react'
import './_landing.scss';
import FancyButton from '../../components/fancy button'


export default class landing extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            detailView: true,
            activeColor: 'red',
        }

        this.handleColorChange = this.handleColorChange.bind(this);
    }

        handleColorChange(event) {
            event.preventDefault()
        }
    render() {
      return(
        <div className='landingContainer'>
            <FancyButton
            history={this.props.history}
            />
        </div>
      );
    }
  }