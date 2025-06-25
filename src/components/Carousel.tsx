import "../styles/carouselStyles/styles.css";

const images = {
    0: { imgUrl: "/carousel/concert.webp" },
    1: { imgUrl: "/carousel/katsu.webp" },
    2: { imgUrl: "/carousel/rainbow.webp" },
    3: { imgUrl: "/carousel/snow.webp" },
    4: { imgUrl: "/carousel/park.webp" },
    5: { imgUrl: "/carousel/stars.webp" },
    6: { imgUrl: "/carousel/egg.webp" },
    7: { imgUrl: "/carousel/kb.webp" },
    8: { imgUrl: "/carousel/pc.webp" },
    9: { imgUrl: "/carousel/gundam.webp" },
    10: { imgUrl: "/carousel/shrek.webp" },
}

const imagesArray: JSX.Element[] = Object.values(images).map((image) => 
    <div className="float-wrapper">
        <img className="photocard" src={image.imgUrl} alt={image.imgUrl} />
    </div>);

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