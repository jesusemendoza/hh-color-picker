import React, { Fragment } from 'react';
import ColorPalette from '../color-palette';

export default class PageView extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        let { detailView, handleColorChange, activeColorsDetail } = this.props;
        console.log(activeColorsDetail, ': detail up')
        return (
            <Fragment>
                <ColorPalette 
                    detailView={!detailView}
                    handleColorChange={handleColorChange}
                    activeColorsDetail={activeColorsDetail}
                    bottom={32}
                />
                <ColorPalette 
                    detailView={!detailView}
                    handleColorChange={handleColorChange}
                    activeColorsDetail={activeColorsDetail}
                    bottom={48}
                />
                <ColorPalette 
                    detailView={!detailView}
                    handleColorChange={handleColorChange}
                    activeColorsDetail={activeColorsDetail}
                    bottom={64}
                />
            </Fragment>
        )
    }
}