import React, {Component} from 'react'

export default class Coffee extends Component{

    render(){
        const {waterVolume, bean, type} = this.props

        return(
        <div>    
            <p>My Coffee: </p>
            <ul>
                <li>Water Volume: {waterVolume}</li>
                <li>Bean: {bean}</li>
                <li>Type: {type}</li>
            </ul>
        </div>
        ) 
    }
}