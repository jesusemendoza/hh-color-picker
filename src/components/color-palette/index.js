import React, { Fragment } from 'react';
import './_detail-colors.scss'

export default class ColorPalette extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let { detailView, handleColorChange, activeColorsDetail, bottom } = this.props;
        console.log(activeColorsDetail, ':   detail colors');
        const spacing = 17;
        return (
            <Fragment>
                <div
                onClick={(event)=>handleColorChange(event)} 
                className='detail-color-container' 
                style={{position:'fixed', width:'80%', height: `${detailView?'18%':'0%'}`, right:'2%', bottom:`${bottom}%`, }
            }>
            {activeColorsDetail.map((color, i) => (
                <div
                id={color.hex}
                key={`${i}-${color.hex}-container`}
                className='color-container'
                style={{position:'fixed', width:'10%', height: `${detailView?'10%':'0%'}`, 
                background:`${color.hex}`, right:`${(i * spacing)+ 3}%`, bottom:`${detailView? `${bottom + 4}%`:'-20%'}`, 
                border:`${detailView?'1px solid black':'none'}`,
                borderTopLeftRadius:'5px', borderTopRightRadius:'5px',
            }
        } >
                        <div
                        id={color.hex} 
                        className='color'
                        style={{position:'fixed', width:'10%', height: `${detailView?'4%':'0%'}`, 
                        background:'white', right:`${(i * spacing)+ 3}%`, bottom:`${detailView?`${bottom}%`:'-20%'}`,
                        border:`${detailView?'1px solid black':'none'}`,
                        borderBottomLeftRadius:'5px', borderBottomRightRadius:'5px',
                    }
                } >
                            <p
                            id={color.hex}
                            className='color-text' 
                            style={{position:'fixed', fontSize: '1vw', 
                            right:`${(i * spacing)+ 8}%`, bottom:`${detailView?`${bottom}%`:'-20%'}`,
                        }}
                        >{color.hex}</p>
                        </div>
                    </div>
            ))}
                </div>
            </Fragment>
        )
    }
}