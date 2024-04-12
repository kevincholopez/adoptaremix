import { Carousel } from "flowbite-react";

function CarouselComponent({ listImages }) {
    const listAnimals = listImages.map((item, id) =>
        <img src={item.imagen} id={id} alt={id} width={600} height={400}></img>
    );

    return (
        <Carousel>
            {listAnimals}
        </Carousel>
    );
}

export default CarouselComponent;