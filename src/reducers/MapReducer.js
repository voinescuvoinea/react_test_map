
import {map as actionTypes} from '../actions/actionsTypes';

const initialState = {
    center:{ lat: 44.43225, lng: 26.10626},
    currentTime: ""

};

export default function (state = initialState, action) {

    switch (action.type){

        case actionTypes.MAP_CLICK:
            return {
                ...state,
                ...action.payload
            };

        case actionTypes.SET_CURRENT_TIME:
            return {
                ...state,
                currentTime : action.payload
            };

        default:
            return state;
    }

}