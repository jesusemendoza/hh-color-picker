import React, { Fragment } from 'react';
import './_detail-colors.scss'

export default class DetailColors extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let { detailView, handleColorChange } = this.props;
        return (
            <Fragment>
                <div
                className='detail-color-container' 
                style={{position:'fixed', width:'80%', height: `${detailView?'18%':'0%'}`, background:'orange', right:'2%', bottom:`14%`, border:`${detailView?'1px solid black':'none'}` }
                }>
                    <div
                className='color-container' 
                style={{position:'fixed', width:'10%', height: `${detailView?'12%':'0%'}`, 
                background:'purple', right:'3%', bottom:`18%`, 
                border:`${detailView?'1px solid black':'none'}`,
                borderRadius:'5px',
                }
                } />
                </div>
            </Fragment>
        )
    }
}