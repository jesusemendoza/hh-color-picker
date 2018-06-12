import React, { Component } from 'react';
import './_aside.scss'

export default class Aside extends React.Component{
   render () {
       const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray']
    return (

    <div style={{display:'block',height: '100%', width: '15vw', position: 'fixed', right:'left', background:'#fbf9e6'}} >
    <div style={{width:'100%', height: '5em',background: '#fbf9e6'}} />
    <div style={{width:'100%'}}className='random-button-container'>
    <div style={{width: '80%'}}className='random-button'>
    <h3 style={{fontSize: '1vw'}}className='random-text'>Random Color</h3>
    </div>
    </div>
    <div className='aside-list-container'>
        {colors.map((color,i)=> 
        <p key={i} className='color-list' style={{fontSize: '1.2vw'}}>{color}</p> 
        )}
    </div>
        
        </div>
        )
    }
} 