import React, {Component} from 'react'
import NavbarTop from './components/NavbarTop';

export default class App extends Component{

    render(){
        return(
            <div>
                <NavbarTop />
                {/* </> */}
            </div>
        ) 
    }
}


//========= state //=================

// import React, {Component} from 'react'

// export default class App extends Component{

//   constructor(){
//     super();
//     this.state = {
//       number: 1
//     }
//   }

//   handleClicked(){
//     const number = this.state.number + 1
//     this.setState({
//       number
//     })
//   }

//   render(){
//     return(
//       <div>
//         <button
//           onClick={() => this.handleClicked()}>
//             Increase Number
//         </button>
//         <p>{this.state.number}</p>
//       </div>
//     )
//   }
// }


// events

// import React, {Component} from 'react'

// export default class App extends Component{

//   handleClicked(){
//     alert('I am Clicked!')
//     console.log('I am Clicked!');
//   }

//   render(){
//     return(
//       <button
//         onClick={() => this.handleClicked()}>
//           Click Me!
//       </button>
//     )
//   }
// }


//========= using props //=========
// import React, {Component} from 'react'
// import Coffee from './components/Coffee'
// import Glass from './components/Glass'
// import Saucer from './components/Saucer'

// export default class App extends Component{

//   render(){
//     console.log('render');
//     return (
//       <div>
//         <p>Hello World, Indra</p>
//         <Coffee
//           waterVolume={1}
//           bean="arabica"
//           type="espresso"
//         />
//         <Glass
//           color="blue"
//         />
//         <Saucer
//           width={100}
//         />
//       </div>
//     )
//   }
// }


//========= import from component folder //=========
// import React, {Component} from 'react'
// import Profile from './components/Profile'

// export default class App extends Component{

//   render(){
//     return(
//       <div>
//         <p>Hello World, Indra</p>
//         <Profile/>
//       </div>
//     )
//   }
// }

// egghead.io
// impactbyte.network@gmail.com
// learntechnologytogether


//========= basic react //=========

// import React, {Component} from 'react'
// import logo from './logo.svg'
// import './App.css'

// export default class App extends Component{

//   render(){
//     return(
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to Indra Putra Learning REACTJS</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload
//         </p>
//       </div>
//     )
//   }
// }