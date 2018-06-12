import React, { Fragment } from 'react';
import './_detail.scss'
import ColorPalette from '../color-palette';

export default class Detail extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        let { detailView, activeColor, detailViewToggle, handleColorChange, activeColorsDetail } = this.props;
        console.log(activeColorsDetail, ': detail up')
        return (
            <Fragment>
                <div
                className='detail-container' 
                style={{width:'80%', height: `${detailView?'55%':'0%'}`, background:`${activeColor}`, right:'2%', top:`10%`, border:`${detailView?'1px solid black':'none'}` }
                }>
                 </div>
                <div
                className='detail-toggle-container'
                onClick={(event)=> detailViewToggle(event)}
                style={{position: 'fixed', width:'78%', height: `${detailView?'10%':'0'}`,
                right:'2%', bottom:`${detailView?'0%':'-5%'}`, 

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