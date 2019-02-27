import React, { Component } from 'react';
import ItemBox from './ItemBox'
import eventsjson from './api/events.json';

class Apitest extends Component{

    constructor(){
        super();
        this.state = {

            events: eventsjson.events,

            colors: [
                {   //red
                    background: '#cf2e2e'
                },
                {   //yellow
                    background: '#f1eb52'
                },
                {   //green
                    background: '#75b85b'
                },
                {   //blue
                    background: '#547dc0'  
                },
            ]
        }
    }

    render(){
        return(
            <div>
                {this.state.events.map(items => ( 
                    
                    <ItemBox key = {items.index}
                    logoUrl = {items.img}
                    title = {items.name}
                    description = {items.description}
                    boxStyle = {this.state.colors[0]}
                    />      
                    
                ))}
            </div>
        )
    }
}

export default Apitest;