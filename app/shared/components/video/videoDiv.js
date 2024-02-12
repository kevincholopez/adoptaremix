'use client'
import './style.css'
import ReactPlayer from 'react-player'

export default function VideoComponent(props) {
    console.log(props)
    return (
        <div>
            <ReactPlayer width={550} url={props.video} controls />
        </div>
    )
}
