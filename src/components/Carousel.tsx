import "../styles/carouselStyles/styles.css";
import CarouselItem from "./CarouselItem";

const images = {
    0: { imgUrl: "/carousel/concert.jpg" },
    1: { imgUrl: "/carousel/katsu.jpg" },
    2: { imgUrl: "/carousel/rainbow.jpg" },
    3: { imgUrl: "/carousel/snow.jpg" },
    4: { imgUrl: "/carousel/park.jpg" },
    5: { imgUrl: "/carousel/stars.jpg" },
    6: { imgUrl: "/carousel/egg.jpg" },
    7: { imgUrl: "/carousel/kb.jpg" },
    8: { imgUrl: "/carousel/pc.jpg" },
    9: { imgUrl: "/carousel/gundam.jpg" },
    10: { imgUrl: "/carousel/shrek.jpg" },
}

const imagesArray: JSX.Element[] = Object.values(images).map((image) => <CarouselItem imgUrl={image.imgUrl}></CarouselItem>);

const Carousel = () => {
    return (
        <div className="carousel-container">
      <div className="carousel-track">
        {imagesArray}
        {imagesArray}
      </div>
    </div>
    )
}

export default Carousel;