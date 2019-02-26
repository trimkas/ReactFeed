import React, { Component } from 'react';
import './App.css';

class ItemBox extends Component{
    
    render(){
        const { logoUrl, boxStyle } = this.props;

        return(
            <div className='box' style= { boxStyle } >
                <img src={ logoUrl } alt='event foto'/>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default ItemBox;