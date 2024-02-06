import { useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { list } from '../final/src/data'

export const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {list.map((person) => {
          const { id, image, title, quote, name } = person
          return (
            <div key={id}>
              <img className="person-img" src={image} alt={title} />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <div className="icon">
                <FaQuoteRight />
              </div>
            </div>
          )
        })}
      </Slider>
    </section>
  )
}
