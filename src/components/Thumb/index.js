import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//styled components
import { Image, Wrapper, Content } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable, movieTitle, releaseDate }) => (
    <>
        {
            movieTitle && releaseDate ?
                (
                    <Link to={`/${movieId}`} style={{ textDecoration: 'none' }}>
                        <Wrapper>
                            <Image src={image} alt='movie-thumb' />
                            <Content>
                                <h3>{movieTitle}</h3>
                                <h4>{releaseDate}</h4>
                            </Content>
                        </Wrapper> </Link>)
                : (<div>
                    <Image src={image} alt='movie-thumb' />
                </div>)
        }
    </>
)
Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
    movieTitle: PropTypes.string,
    releaseDate: PropTypes.string
}

export default Thumb;