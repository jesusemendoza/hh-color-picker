import React, { Fragment } from 'react';
import './_detail.scss'
import ColorPalette from '../color-palette';

export default class Detail extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        let { detailView, activeColor, detailViewToggle, handleColorChange, activeColorsDetail } = this.props;
        return (
            <Fragment>
                <div
                className='detail-container' 
                style={{width:'70%', height: `${detailView?'43%':'0%'}`, background:`${activeColor}`, right:'6%', top:`13%`, border:`${detailView?'1px solid black':'none'}` }
                }>
                 </div>
                 <div
                className='detail-text-container' 
                style={{width:'70%', height: `${detailView?'10%':'0%'}`, 
                background:'white', right:'6%', top:`${detailView?'55%':'-10%'}`, 
                border:`${detailView?'1px solid black':'none'}` }
                }>
                    <p id='detail-text'className='detail-toggle-text'>{activeColor}</p>
                 </div> 

                <div
                className='detail-toggle-container'
                onClick={(event)=> detailViewToggle(event)}
                style={{position: 'fixed', width:'78%', height: `${detailView?'10%':'0'}`,
                right:'1.5%', bottom:`${detailView?'0%':'-5%'}`, 

                 textAlign: 'center', padding: '1vw'
                }
                }>
                    <div className='detail-toggle-button' 
                    id='clear-detail'
                    style={{width: '10vw', border: '1px solid black', borderRadius: '5px', 
                    margin: 'auto auto', padding: '0em 1em 0em 1em' }
                    }>
                        <p id='clear-text'className='detail-toggle-text'>Clear</p>
                    </div>
                </div>
                <ColorPalette 
                    detailView={detailView}
                    handleColorChange={handleColorChange}
                    activeColorsDetail={activeColorsDetail}
                    bottom={16}
                />
            </Fragment>
        )
    }
}