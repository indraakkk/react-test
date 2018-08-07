import React, {Component} from 'react'
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
  CardSubtitle,
  Row
} from 'reactstrap';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'
import './HeaderSlide.css'

const items = [
    {
        src: require("./Assets/dark1.jpg"),
        altText: 'Dark One',
        captions: 'Dark One'
    },
    {
        src: require('./Assets/dark2.jpg'),
        altText: 'Dark Two',
        captions: 'Dark Two'
    },
    {
        src: require('./Assets/dark3.jpg'),
        altText: 'Dark Three',
        captions: 'Dark Three'
    }
];

export default class HeaderSlide extends Component{
    constructor(props) {
    super(props);
    this.state = {activeIndex: 0}
      this.next = this.next.bind(this)
      this.previous = this.previous.bind(this)
      this.goToIndex = this.goToIndex.bind(this)
      this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }
    onExiting(){
      this.animating = true;
  }
    onExited(){
      this.animating = false;
  }
  next(){
    if(this.animating) {
      return; 
      }
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;

        this.setState({activeIndex: nextIndex});
    }
    previous(){
    if(this.animating) {
      return;
        }
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;

    this.setState({activeIndex: nextIndex})
  }
    goToIndex(newIndex){
    if(this.animating) {
            return; 
        }
    this.setState({activeIndex: newIndex})
  }
    render(){
    const {activeIndex} = this.state,

      slides = items.map((item)=> <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.captions} captionHeader={item.captions} />
      </CarouselItem>)

    return(
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
          <CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
        </Carousel>

        <Row className='m-5'>
          <CardDeck>
            <Card>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </CardDeck>
        </Row>
      </div>
        )
  }
}