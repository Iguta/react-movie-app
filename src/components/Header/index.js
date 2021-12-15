import React from 'react'

import RMDBLogo from '../../images/react-movie-logo.svg';

import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';
 
import {Link} from 'react-router-dom';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to="/">
                <LogoImg src={RMDBLogo} alt="rdmb-logo"></LogoImg>
            </Link>
           <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo"></TMDBLogoImg>
        </Content>
    </Wrapper>
);

export default Header;