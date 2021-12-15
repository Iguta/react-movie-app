import React from 'react';
import PropTypes from 'prop-types'

import {Content, Text, Wrapper} from './HeroImage.styles';
// alternatively instead of repeating props.attribute {image, title, text}
const HeroImage = ({image, text, title}) => {
    console.log(image);
    return(
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content> 
    </Wrapper>
    )
    };

    HeroImage.propTypes = {
        image:PropTypes.string,
        text:PropTypes.string,
        title:PropTypes.string
    }

export default HeroImage;