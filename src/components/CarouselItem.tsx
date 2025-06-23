const CarouselItem = ({imgUrl}: {imgUrl: string}) => {
    return <div>
        <img className="carousel-image" src={imgUrl} alt={imgUrl} />
    </div>
}

export default CarouselItem;