import { Carousel } from 'flowbite-react'

export default function CarouselComponent(listImages) {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                {listImages.listImages.length !== 0 ? listImages.listImages.map((item, id) => {
                    return (
                        <img width={400} height={400} src={item.image} alt="2" />
                    )
                }) : <img width={400} height={400} alt="2" />}
            </Carousel>
        </div>
    )
}
