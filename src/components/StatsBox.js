import React from 'react'; 
import './StatsBox.css'

function StatsBox(props) {
    return (
        <section className="StatsBox" >
            {props.children}
        </section>
    )
}
export default StatsBox; 