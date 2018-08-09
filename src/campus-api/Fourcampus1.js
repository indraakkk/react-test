import React, {Component} from 'react'
import axios from 'axios'


// card style
const cardWidth = {
    maxWidth: '15rem'
}

class Fourcampus extends Component{

    constructor(){
      super()
      this.state = {
        campuses: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:8080/fourcampus/campuses')
    .then(res=> {
      const campuses = res.data
      this.setState({campuses})
    })
  }
  render(){

    return(
      <React.Fragment>
        {this.state.campuses.map(campuses=>

          <div key={campuses._id}>
            <div className='container mt-3'>
              <div className='row'>
                <div className="card text-white bg-dark mr-2 ml-2 mb-3" style={cardWidth}>
                  <div className="card-body">
                    <h5 className="card-header">{campuses.name_campus}</h5>
                    <h6 className="card-title text-light">{campuses.city_campus}</h6>
                    <h5 className="card-title text-light">{campuses.site_campus}</h5>
                    <h5 className="card-title text-light">{campuses.phone_campus}</h5>
                    <p className="card-text">{campuses.addr_campus}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default Fourcampus;

/*
 * With fetch==============
 * import React, {Component} from 'react'
 */

/*
 * // card style
 * const cardWidth = {
 *     maxWidth: '15rem'
 * }
 */

/*
 * Class Fourcampus extends Component{
 *     state = {
 *         isLoading: true,
 *         campuses:[],
 *         error: null
 *     }
 */

/*
 *     FecthCampuses(){
 *         fetch('http://localhost:8080/fourcampus/campuses')
 *         .then(response=> response.json())
 *         .then((data)=> {
 *             this.setState({
 *                 campuses: data,
 *                 isLoading: false
 *             })
 *             console.log(data);
 *         }) 
 *         .catch(error=> this.setState({error, isLoading: false}))
 *     }
 */

/*
 *     ComponentDidMount(){
 *         this.fecthCampuses()
 *     }
 */

/*
 *     Render(){
 *         const { isLoading, campuses, error } = this.state
 *         return(
 *             <React.Fragment>
 *                 <h1 className='text-center mt-3'>4Campus</h1>
 *                 {error ? <p>{error.message}</p> : null}
 *                 {!isLoading ? (
 *                     campuses.map(campus=> {
 *                         const{ _id, name_campus, addr_campus, phone_campus, city_campus, site_campus } = campus
 *                         return(
 *                             <div className='container'>
 *                                 <div className='row'>
 *                                     <div key={_id}>
 *                                     <div className="card text-white bg-dark mr-2 ml-2 mb-3" style={cardWidth}>
 *                                         <div className="card-body">
 *                                             <h5 className="card-header">{name_campus}</h5>
 *                                             <h6 className="card-title text-light">{city_campus}</h6>
 *                                             <h5 className="card-title text-light">{site_campus}</h5>
 *                                             <h5 className="card-title text-light">{phone_campus}</h5>
 *                                             <p className="card-text">{addr_campus}</p>
 *                                         </div>
 *                                     </div>
 *                                     </div>
 *                                 </div>
 *                             </div>
 *                         )
 *                     })
 *                 ):(<h3>Loading...</h3>)}
 *             </React.Fragment>
 *         )
 *     }
 * }
 */

// Export default Fourcampus;

// End with fetch======================