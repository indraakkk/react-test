import React, {Component} from 'react'

class Background extends Component{
    constructor(){
    super()
    this.state = {
        pictures: [],
        }
    }

    componentDidMount(){

        fetch('https://randomuser.me/api/?results=48')
        .then(results=> {
            return results.json()
        }).then(data=> {
            let pictures = data.results.map((pic) => {
                return(
                    <div className='m-1' key={pic.results}>
                        <img src={pic.picture.medium} alt='randomuser' />
                    </div>
                )
            })
            this.setState({pictures: pictures})
            console.log("state", this.state.pictures)
        })
    }

    render(){
        return(
            <div className='container'>
                <div className='row'>
                    {this.state.pictures}
                </div>
            </div>
        )
    }
}

export default Background;
