import React, { Component } from 'react'
const Myarea = props => {
    return(
        <div>
            <p>change1</p>
            <p>change2</p>
            <p>change3</p>
            <p>change4</p>
            <p>apple now cherry pick</p>
            <h1>{props.nameList}</h1>
            <h1>{props.ageList}</h1>
        </div>);
    
}
    
export default Myarea;