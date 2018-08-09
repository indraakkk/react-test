import React, {Component} from 'react'
import MainComponent from './components/MainComponent';
import Footers from './components/Footers'
import './App.css'


export default class App extends Component{

    render(){
      return(
      <React.Fragment>
        <MainComponent />
        <Footers />
      </React.Fragment>
    ) 
  }
}