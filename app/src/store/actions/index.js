import axios from 'axios';

//* 💡 action types
export const FETCH_SEACRITS_START = "FETCH_SEACRITS_START";
export const FETCH_SEACRITS_SUCCESS = "FETCH_SEACRITS_SUCCESS";

//* 💡 action creators
export const fetchSeaCrits = () => {
    return (dispatch) => {
        //* 💡 async actions:
        dispatch({ type: FETCH_SEACRITS_START })
        
        //* 💡 fetch data
        axios
            .get('https://acnhapi.com/v1/sea')
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_SEACRITS_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err.message);
            });
    };
};

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