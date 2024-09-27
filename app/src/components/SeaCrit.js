import React from 'react';

export const SeaCrit = (props) => {
    return (
        <div className="critter">
            <span className="seaCritName">
                {props.crit.name["name-USen"]} 
            </span>
            <span className="sellPrice">
                &nbsp;🔔{props.crit.price}
            </span>
        </div>
    )
}


//* ⚡ ACNH API
//https://acnhapi.com/v1/sea
/**
 * month-array-northern	
 * month-array-southern	
 * time-array	
 * time
 * isAllDay
 * isAllYear
 * shadow
 * price
 */