import styled from 'styled-components';

export const Wrapper = styled.div`

    color:var(--white);
    background: var(--darkGrey);
    border-radius:20px;
    text-align:center;
    
    h3{
        margin: 10px 0 0 0;
    }
    p{
        margin: 5px 0;
    }
`

export const Image = styled.img`
    display: block;
    width: 100%;
    height:270px;
    border-radius:15px;
    padding: 5px;
    object-fit:cover;
`