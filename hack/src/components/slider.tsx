import Slider from "react-slick";
import myimage from "../assets/image 4.png"
function ProjectSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 3,
    autoplay : true,
    autoplaySpeed : 5000,
  };
  return (
    <div className="slider-container w-7/12">
      <Slider {...settings}>
        <div className="p-3">
            <img src={myimage}></img>
        </div>
        <div className="p-3">
            <img src={myimage}></img>
        </div>
        <div>
            <img src={myimage}></img>
        </div>
      </Slider>
    </div>
  );
}

export default ProjectSlider;