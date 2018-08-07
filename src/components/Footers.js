import React, {Component} from 'react'
import LogoFB from './Assets/facebook.png'
import LogoID from './Assets/linkedin.png'

// const footerStyle ={
//   position: 'flex',
//   height: '125px',
//   width: '100%'
// }

// const listStyled = {
//   listStyle: 'none',
//   marginTop: '12px'
// }

// const inLined = {
//   display: 'inline'
// }

const imageLogo ={
  maxWidth: '50px'
}



export default class Footers extends Component{
  render(){
    return(
      <div className='footers bg-dark'>
        <div className='container'>
            <div className='col'>
              <h5 className='text-light'>social media</h5>
              <ul className='list-inline'>
                <li className='list-inline-item'><img style={imageLogo} src={LogoFB} alt='fb logo'/></li>
                <li className='list-inline-item'><img style={imageLogo} src={LogoID} alt='id logo'/></li>
                <li className='list-inline-item'><img style={imageLogo} src={LogoFB} alt='fb logo'/></li>
              </ul>
            </div>
        </div>
      </div>
    )
  }
}

// {/* <div style={footerStyle} className='footer bg-dark'>
// <footer>
//   <ul style={listStyled} className='text-light'>
//     <li>social media:</li>
//   </ul>
//   <ul>
//     <li style={inLined}><img style={imageLogo} src={LogoFB} alt='fb logo' /></li>
//     <li style={inLined}><img style={imageLogo} src={LogoID} alt='id logo' /></li>
//     <li style={inLined}><img style={imageLogo} src={LogoFB} alt='fb logo' /></li>
//   </ul>
// </footer>
// </div> */}