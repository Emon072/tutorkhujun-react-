import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TutorSlickSlider.scss"; // Import your CSS file for component styling
import { getAllTutorPrimaryInfo } from "../../api/tutor_api/registerTutorApi";
import { useNavigate } from "react-router-dom";

function TutorSlickSlider() {

  const [teacherInfoArr, setteacherInfoArr] = useState([]);
  const navigate = useNavigate();

  const getTutorInfomation = async()=>{
    const res = await getAllTutorPrimaryInfo();
    setteacherInfoArr(res);
  }

  useEffect(() => {
    getTutorInfomation();
  }, [])

  const goToProfileInfo = (id) =>{
    navigate(`/tutor-details/${id}`);
  }

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
    arrows: false,

    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="container text-center tutor-slider">
      {teacherInfoArr.map((obj, i) => {
        return (
          <div key={i} className="tutor-card tutor-card-view">
            <div className="container-fluid text-center">
              <div className="for-premium-style">
                <img
                  className="teacher-style"
                  src={obj.profilePicture}
                  alt="teacher"
                  style={{ display: "block", margin: "0 auto" }} // Centering image
                ></img>
              </div>
              
              <div className="teacher-name">{obj.tutorName}</div>
              <div className="teacher-university">
                {obj.varsity}
              </div>
              <div className="teacher-subject">{obj.subject}</div>
              <div className="place-style">
                <div>
                  <i
                    class="fa-solid fa-location-dot"
                    style={{ marginRight: "3px", color: "red" }}
                  ></i>
                  {obj.tutionDistrict}
                </div>
              </div>
              <button className="btn btn-1 gradient_bg text-light" onClick={()=>goToProfileInfo(obj.id)}>
                View Details
              </button>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default TutorSlickSlider;
