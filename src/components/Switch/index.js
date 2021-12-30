import React, {useEffect, useState, useRef} from 'react';

import {Wrapper} from './Switch.styles'

const Switch = ({setMovieOrTVShow}) => {
    const [state, setState] = useState('');
    const initial = useRef(true);


    function handleChange(event){
        if(event.currentTarget.checked){
            setState("TVShows")
        }
        else{
            setState("Movies")
        }
    };

    useEffect(() => {
        if(initial.current){
            initial.current = false;
            return;
        }
        const timer = setTimeout(()=> {
            setMovieOrTVShow(state)
        }, 500);

        return () => clearTimeout(timer);
    }, [setMovieOrTVShow, state])
    return (
        <Wrapper>
            <h2>Movies</h2>
            
            <label className = 'switch'>
                <input 
                type="checkbox" 
                value="2"
                onChange={handleChange}/>
                <span className="slider round"></span>
            </label>

            <h2>TV Shows</h2>
        </Wrapper>
    )
}

export default Switch;