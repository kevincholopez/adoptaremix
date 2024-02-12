'use client'
import './style.css'
import ExportedImage from "next-image-export-optimizer";
import imageExample from '../../../assets/home/example1.webp'
import imageExample2 from '../../../assets/home/example2.webp'
import imageExample3 from '../../../assets/home/example3.webp'
import imageExample4 from '../../../assets/home/example4.webp'
import imageExample5 from '../../../assets/home/example5.webp'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CarouselComponent(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <Carousel responsive={responsive}>
                <div>
                    <ExportedImage src={imageExample} alt="adopcion_1" width={300} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <ExportedImage src={imageExample2} alt="adopcion_1" width={300} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <ExportedImage src={imageExample3} alt="adopcion_1" width={300} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <ExportedImage src={imageExample4} alt="adopcion_1" width={300} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <ExportedImage src={imageExample5} alt="adopcion_1" width={300} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}
