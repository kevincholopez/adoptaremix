import { Carousel } from "flowbite-react";

function CarouselComponent({ listImages }) {
    const listAnimals = listImages.map((item, id) =>
        <img src={item.imagen} alt="image" width={600} height={400}></img>
    );

    return (
        <div className="h-screen w-1/2">
            <Carousel>
                {listAnimals}
            </Carousel>
        </div>
    );
}

export default CarouselComponent;