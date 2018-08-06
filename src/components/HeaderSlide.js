import React, {Component} from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap'

const items = [
    {
        src: 'data:image/svg+xml;charset=UTF-8,<svg%20width%3D"800"%20height%3D"400"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20viewBox%3D"0%200%20800%20400"%20preserveAspectRatio%3D"none"><defs><style%20type%3D"text%2Fcss">%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20<%2Fstyle><%2Fdefs><g%20id%3D"holder_15ba800aa20"><rect%20width%3D"800"%20height%3D"400"%20fill%3D"%23666"><%2Frect><g><text%20x%3D"247.3203125"%20y%3D"218.3">First%20slide<%2Ftext><%2Fg><%2Fg><%2Fsvg>',
        altText: 'Dark One',
        captions: "Dark One"
    },
    {
        src: 'data:image/svg+xml;charset=UTF-8,<svg%20width%3D"800"%20height%3D"400"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20viewBox%3D"0%200%20800%20400"%20preserveAspectRatio%3D"none"><defs><style%20type%3D"text%2Fcss">%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20<%2Fstyle><%2Fdefs><g%20id%3D"holder_15ba800aa20"><rect%20width%3D"800"%20height%3D"400"%20fill%3D"%23666"><%2Frect><g><text%20x%3D"247.3203125"%20y%3D"218.3">Second%20slide<%2Ftext><%2Fg><%2Fg><%2Fsvg>',
        altText: 'Dark Two',
        captions: 'Dark Two'
    },
    {
        src: 'data:image/svg+xml;charset=UTF-8,<svg%20width%3D"800"%20height%3D"400"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20viewBox%3D"0%200%20800%20400"%20preserveAspectRatio%3D"none"><defs><style%20type%3D"text%2Fcss">%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20<%2Fstyle><%2Fdefs><g%20id%3D"holder_15ba800aa20"><rect%20width%3D"800"%20height%3D"400"%20fill%3D"%23666"><%2Frect><g><text%20x%3D"247.3203125"%20y%3D"218.3">Third%20slide<%2Ftext><%2Fg><%2Fg><%2Fsvg>',
        altText: 'Dark Three',
        captions: 'Dark Three'
    }
];

export default class HeaderSlide extends Component{
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 }
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
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous(){
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex })
    }

    goToIndex(newIndex){
        if(this.animating) return;
        this.setState({ activeIndex: newIndex })
    }

    render(){
        const { activeIndex } = this.state

        const slides = items.map((item) => {
            return(
                <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={item.src}
                >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.captions} captionHeader={item.captions} />
                </CarouselItem>
            )
        })

        return(
            <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        )
    }
}