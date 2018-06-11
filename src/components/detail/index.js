import React from 'react';
import './_detail.scss'

export default class Detail extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        let { detailView, activeColor} = this.props;
        console.log(activeColor)
        return (
            <div
            className='detail-container' 
            style={{width:'80%', height: '60%', background:`${activeColor}`, right:'2%', top:'10%' }
            }>
            </div>
        )
    }
}