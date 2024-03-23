import React from 'react'
import './SubjectSlickSlider.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SubjectSlickSlider() {
  const subjectObj =[
    'Bangla' , 'English' ,'Computer', 'Physics', 'Math', 'Chemisty', 'Biology','Religion', 'ICT', 'Communication'
  ];

  var settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    arrows: false ,

    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
        <Slider {...settings} className="subject-slider">
        {subjectObj.map((obj , i)=>{
            return (
                <div key={i} className="subject-card">
                    <div className="subject-card-content">
                        <span>{obj}</span>
                    </div>
                </div>
            )
        })}
    </Slider>
    </div>
  )
}

export default SubjectSlickSlider