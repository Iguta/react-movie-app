import React from 'react'

import {Wrapper} from './Video.styles'

const Video = ({videoKey}) => {
    let widthFrame = document.getElementsByTagName('iframe')[0];
    console.log(widthFrame)
    return(
        <Wrapper>
            <h2>Trailer</h2>
  
            <iframe 
            src={`https://youtube.com/embed/${videoKey}?autoplay=1&loop=5&controls=1`}>
            </iframe>

        </Wrapper>
    )
}

export default Video;