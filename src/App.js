import React, {Component} from 'react'
import MainComponent from './components/MainComponent';
import Footers from './components/Footers'
import Fourcampus from './campus-api/Fourcampus'
import './App.css'


export default class App extends Component{

    render(){
      return(
      <div>
        <MainComponent />
        <Fourcampus />
        <Footers />
      </div>
    ) 
  }
}