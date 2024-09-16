import { FETCH_SEACRITS_START, FETCH_SEACRITS_SUCCESS } from '../actions';

const initialState = {
    isLoading: false,
    seaCritsListData: [],
    error: "",
};

export const reducer  = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SEACRITS_START:
            return {
                ...state,
                isLoading: true,
                error: ""
            };
        case FETCH_SEACRITS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                seaCritsListData: action.payload
            }
        default:
            return state;
    }
};