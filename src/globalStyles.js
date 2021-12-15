import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig:1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
}
* {
    box-sizing:border-box;
    font-family:'Abel', san-serif
}
body{
    margin:0;
    paddding:0;

    h1{
        font-size: 2rem;
        font-weigh:600;
        color:var(--white);
    }
    h3{
        font-size:1.2rem;
        font-weight:600;
    }
    p{
        font-size:1.0rem;
        color:var(--white)
    }
}
`