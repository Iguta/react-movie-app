import styled from 'styled-components';

export const GenreContainer = styled.div`
    width: 90%;
    /*height: 60px;*/
    background-color: var(--lightGrey);
    margin: 5px auto;
    display: flex;
    justify-content: space-around;
    border-radius: 20px;
    padding: 10px 0px;
    flex-wrap: wrap;   
`

export const GenreOption = styled.div`
    background-color: var(--medGrey);
    color: white;
    padding: 10px;
    border-radius: 10px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px ;

    cursor: pointer;
    /*:hover{
        background-color: #255eba;
        color: gold;
    }*/

    background-color: ${(props => props.itemId === props.genreSelected &&  "#255eba")};
    color: ${(props => props.itemId === props.genreSelected &&  "gold")};
`