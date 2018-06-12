import React, { Component } from 'react';
import './_aside.scss'

export default class Aside extends React.Component{
    constructor(props){
        super(props)
    }
   render () {
       const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray'];
       let { getRandomColor } = this.props;
    return (

    <div style={{display:'block',height: '100%', width: '20vw', position: 'fixed', right:'left', background:'#fbf9e6'}} >
    <div style={{width:'100%', height: '5em',background: '#fbf9e6'}} />
    <div style={{width:'100%'}}className='random-button-container' 
        onClick={(event)=> getRandomColor(event)}>
    <div style={{width: '80%'}}className='random-button'>
    <p style={{fontSize: '1.6vw'}}className='random-text'>Random Color</p>
    </div>
    </div>
    <div className='aside-list-container' onClick={(event)=> this.props.handleColorChange(event)}>
        {colors.map((color,i)=> 
        <p key={i} id={color.toLowerCase()} className='color-list' style={{fontSize: '1.6vw'}}>{color}</p> 
        )}
    </div>
        
        </div>
        )
    }
} 