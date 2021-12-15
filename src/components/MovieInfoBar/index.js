import React from 'react'
import PropTypes from 'prop-types';

//helpers
import { calcTime, convertMoney } from '../../helpers'
//styled components
import {Wrapper, Content} from './MovieInfoBar.styles'
 
//creating the MovieInfoBar componennt
const MovieInfoBar = ({time, budget, revenue}) => (
   <Wrapper>
       <Content>
           <div className="column">
                <p>Running Time: {calcTime(time)}</p>
           </div>
           <div className="column">
                <p>Budget: {convertMoney(budget)}</p>
           </div>
           <div className="column">
                <p>Revenue: {convertMoney(revenue)}</p>
           </div>
       </Content>
   </Wrapper>  
);
MovieInfoBar.propTypes = {
     time:PropTypes.number,
     budget:PropTypes.number,
     revenue:PropTypes.number 
}
export default MovieInfoBar;