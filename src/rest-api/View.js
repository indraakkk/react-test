import React, {Component} from 'react'
import Background from './Background'

class View extends Component{
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className='container'>
                <div>
                    <h1 className='text-center mt-3'>Fetch data from random user generator</h1>
                </div>
                <div className='container m-3'>
                <Background />
                </div>
            </div>
        )
    }
}

export default View;