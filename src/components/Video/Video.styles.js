import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    width: 100%;
    flex-direction:column;
    align-items:center;
    background-color:var(--darkGrey);
    margin-bottom: 20px ;
    h2{
        text-align:center;
        color: var(--white);
    }
    iframe{
        border:none;
        margin-bottom:20px;
        opacity:1.0;
        text-align:center;
        width: 50%;
        height:350px;
        margin: 0 auto 15px auto;
    }
`