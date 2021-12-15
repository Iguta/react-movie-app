import styled from 'styled-components';

export const Image = styled.img`
    width:100%;
    min-height:250px;
    max-width:720px;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 15px;
    padding: 5px;
    animation:animateThumb 0.5s;

    :hover{
        opacity:0.7;
    }

    @keyframes animateThumb{
        from{
            opacity:0
        }
        to{
            opacity: 1;
        }
    }

`

export const Wrapper = styled.div`
    border-radius:15px;
    background-color : var(--darkGrey);

`
export const Content = styled.div`
    color:var(--white);
    text-align:center;
    padding: 5px;
    min-height:150px;
   
    h3{
        margin: 20px 0;
        font-weight:200;
    }
    h4{
        padding-bottom: 10px;
        font-weight:200;
    }

`