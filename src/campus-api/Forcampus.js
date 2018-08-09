import React, {Component} from 'react'
import axios from 'axios'


// card style
const cardWidth = {
    maxWidth: '15rem'
}


class Fourcampus extends Component{
  constructor(){
      super()
      this.state ={
          campuses:[]
      }
  }

  componentDidMount(){

    axios.get('http://localhost:8080/fourcampus/campuses')
    .then(res=> {
      const campuses = res.data.map((campuses)=>
        <div key={campuses._id}>
          <div className="card text-white bg-dark m-3" style={cardWidth}>
            <div className="card-body">
              <h5 className="card-header">{campuses.name_campus}</h5>
              <h6 className="card-title text-light">{campuses.city_campus}</h6>
              <h5 className="card-title text-light">{campuses.site_campus}</h5>
              <h5 className="card-title text-light">{campuses.phone_campus}</h5>
              <p className="card-text">{campuses.addr_campus}</p>
            </div>
          </div>
      </div>)
      
      this.setState({campuses})
      console.log("state", this.state.campuses);
    })
  }

  render(){
      return(
          <div className='container'>
            <div className='row'>
            {this.state.campuses}
            </div>
          </div>
      )
  }

}

export default Fourcampus;
