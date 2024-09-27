import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { fetchSeaCrits } from "../store/actions";

import { SeaCrit } from "./SeaCrit";

const SeaCritList = (props) => {
    useEffect(() => {
        props.fetchSeaCrits();
    }, []);

    return (
        <>
            <div className="header">
                <h1>🌊 Animal Crossing: New Horizons 🌴</h1>
                <h2>🐙 Sea Creatures List 🦐</h2>
            </div>
            <div className="messages">
                { props.isLoading ? <p>Diving. . .</p> : null }
                { props.error ? <p>{props.error}</p> : null }
            </div>
            <div className="container">
                {/* {console.log(Object.entries(props.seaCrits))} */}
                {Object.entries(props.seaCrits).map((seaCrit) => (
                    <SeaCrit crit={seaCrit[1]} />
                ))}
            </div>
        </>
    );
}

//* State
//isLoading, seaCrits, error

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        seaCrits: state.seaCritsListData,
        error: state.error,
    }
}

export default connect(mapStateToProps, { fetchSeaCrits })(SeaCritList);