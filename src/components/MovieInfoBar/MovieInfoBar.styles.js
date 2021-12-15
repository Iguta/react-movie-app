
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items:baseline;
    min-height: 100px;
    background:var(--darkGrey);
    padding 0 20px;

`
export const Content = styled.div`
    display:flex;
    max-width: var(--maxWidth)
    width: 100%;
    margin: 20px auto;

    .column{
        display: flex;
        align-items:center;
        justify-content:center;
        background: var(--medGrey);
        border-radius:20px;
        margin: 0 20px;
        padding: 0 20px;
        min-width: 200px;
        :first-child{
            margin-left:0;
        }
        :last-child{
            margin-right:0;
        }
        }
        @media screen and (max-width:768px){
            display: block;
            .column{
                margin:20px 0;
            }
    }
    `
