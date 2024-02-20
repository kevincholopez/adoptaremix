import imageExample from '~/assets/home/example1.webp'
import imageExample2 from '~/assets/home/example2.webp'
import imageExample3 from '~/assets/home/example3.webp'
import imageExample4 from '~/assets/home/example4.webp'
import imageExample5 from '~/assets/home/example5.webp'
import { Carousel } from 'flowbite-react'

export default function CarouselComponent() {
    return (
        <div className="h-96">
            <Carousel>
                <img width={400} height={400} src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="1" />
                <img width={400} height={400} src={imageExample2} alt="2" />
                <img width={400} height={400} src={imageExample3} alt="3" />
                <img width={400} height={400} src={imageExample4} alt="4" />
                <img width={400} height={400} src={imageExample5} alt="5" />
            </Carousel>
        </div>
    )
}
