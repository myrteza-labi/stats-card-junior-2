import React from 'react'; 
import './Stat.css'

function Stat(props) {
    return (
        <div statnumber={props.statnumber} stattitle={props.stattitle} className="Stat" >
            <p className="statNumber">{props.statnumber}</p>
            <p className="statTitle">{props.stattitle}</p>
        </div>
    )
}
export default Stat; 