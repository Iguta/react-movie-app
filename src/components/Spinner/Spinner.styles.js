import styled from 'styled-components'

export const Spinner = styled.div`
    border: 5px solid var(--lightGrey);
    border-bottom: 5px solid var(--medGrey);
    border-radius: 50%;
    height:50px;
    width: 50px;
    animation: spin 0.8s linear infinite;
    margin: 20px auto;

    @keyframes spin{
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg)
        }
    }


`