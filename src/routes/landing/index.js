import React from 'react'
import './_landing.scss';
import FancyButton from '../../components/fancy button'


export default class landing extends React.Component {
    render() {
        console.log('inside of  landing:  ', this.props.history)
      return(
        <div className='landingContainer'>
            <FancyButton
            history={this.props.history}
            />
        </div>
      );
    }
  }