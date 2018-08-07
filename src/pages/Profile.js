import React, {Component} from 'react'
import {Media, Container} from 'reactstrap'
import profile from '../components/Assets/profile.jpg'

const imgStyle = {
  maxWidth: '200px',
  borderRadius: '100px'
}

export default class Profile extends Component{
  
  render(){
    return (
      <div>
      <Container>
      <Media className='mt-5'>
        <Media className='m-3'>
          <Media style={imgStyle} object src={profile} alt='dummy placeholder' />
        </Media>
        <Media className='m-3' body>
          <Media heading>Personal Summary</Media>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable.
            If you are going to use a passage of Lorem Ipsum,
            you need to be sure there isn't anything embarrassing hidden
            in the middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </Media>
      </Media>
      </Container>
      </div>
      )
    }
}