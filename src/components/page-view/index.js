import React, { Fragment } from 'react';
import ColorPalette from '../color-palette';

export default class PageView extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        let { detailView, handleColorChange, activeColorsDetail, rows } = this.props;
        return (
            <Fragment>
                <ColorPalette 
                    detailView={!detailView}
                    handleColorChange={handleColorChange}
                    activeColorsDetail={rows[0]}
                    bottom={20}
                    name='one'
                />
                <ColorPalette 
                    detailView={!detailView}
                    handleColorChange={handleColorChange}
                    activeColorsDetail={rows[1]}
                    bottom={38}
                    name='two'
                />
                <ColorPalette 
                    detailView={!detailView}
                    handleColorChange={handleColorChange}
                    activeColorsDetail={rows[2]}
                    bottom={56}
                    name='three'
                />
            </Fragment>
        )
    }
}