import "../styles/carouselStyles/styles.css";

const images = {
    0: { imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751296237/concert_wpao1h.webp" },
    1: { imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751296240/katsu_utdiiw.webp" },
    2: { imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751296237/rainbow_xkisfm.webp" },
    3: { imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751296217/snow_k16n52.webp" },
    4: { imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751296223/park_c3s3wm.webp" },
    5: { imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751296189/force_pg8e35.webp" },
    6: { imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751296143/stars_fiy5fv.webp" },
    7: { imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751296212/egg_b17l5r.webp" },
    8: { imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751296197/kb_nhaswq.webp" },
    9: { imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751296195/pc_wuhu6q.webp" },
    10: { imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751296182/gundam_xrqcfq.webp" },
    11: { imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1752186271/books_fpnvt6.webp" },
    12: { imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751296141/shrek_ztbok0.webp" },
}

const imagesArray = Object.values(images).map((image) => 
    <div data-aos="flip-right" className="float-wrapper">
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