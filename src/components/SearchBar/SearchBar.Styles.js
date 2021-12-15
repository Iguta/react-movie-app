import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    align-items: center;
    height: 100px;
    background-color: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    position:relative;
    max-width: var(--maxWidth);
    width:100%;
    height:55px;
    background-color: var(--medGrey);
    margin: 0 auto;
    border-radius: 40px;
    color:var(--white);

    img{
        position:absolute;
        top:14px;
        left:15px;
        width:30px;
    }
    input{
        font-size: var(--fontBig);
        position:absolute;
        margin:8px 0;
        padding: 0 0 0 60px;
        border:0;
        background: transparent;
        height:40px;
        width:95%;
        color:var(--white);
        :focus{
            outline: none;
        }
    }
`;