import React from 'react'; 
import './StatsCard.css'; 
import Illustration from './Illustration'; 
import TextPresentation from './TextPresentation'; 
import StatsBox from './StatsBox'; 
import Stat from './Stat'; 

function StatsCard(props) {
    return (
        <div className="StatsCard" >
            <Illustration/>
            <div className="mainContainer">
                <TextPresentation/>
                <StatsBox>
                    <Stat statnumber={'0'} stattitle={'0'}/>
                    <Stat statnumber={'0'} stattitle={'0'}/>
                    <Stat statnumber={'0'} stattitle={'0'}/>
                </StatsBox>
            </div>
            
        </div>
    )
}
export default StatsCard; 