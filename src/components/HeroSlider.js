import React from 'react'
import {Carousel} from 'react-bootstrap'

const HeroSlider = () => {
    return (
        <>
            <Carousel className='hero-banner-slide'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/7971543/pexels-photo-7971543.jpeg"
                        alt="Editing"
                    />
                    <Carousel.Caption>
                        <h3>Editing</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1291486/pexels-photo-1291486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Reading"
                    />
                    <Carousel.Caption>
                        <h3>Reading</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/3787832/pexels-photo-3787832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Football"
                    />
                    <Carousel.Caption>
                        <h3>Football</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/542555/pexels-photo-542555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Painting"
                    />
                    <Carousel.Caption>
                        <h3>Painting</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HeroSlider