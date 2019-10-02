
import {map as actionTypes} from '../actions/actionsTypes';
import {GOOGLE_MAPS_APIKEY} from '../config'

export const mapClick = (lat, lng) => dispatch => {

    return dispatch({
        type: actionTypes.MAP_CLICK,
        payload: {
            center : { lat: lat, lng: lng}
        }
    });
};

export const getTime = (lat, lng) => dispatch => {

    const myTime = new Date();
    const timeStamp = myTime.getTime()/1000 + myTime.getTimezoneOffset() * 60;

    fetch('https://maps.googleapis.com/maps/api/timezone/json?location='+lat+','+lng+'&timestamp='+timeStamp+'&key='+GOOGLE_MAPS_APIKEY)
        .then(response => response.json())
        .then(data => {
            const offsets = data.dstOffset * 1000 + data.rawOffset * 1000;
            const localTime = timeStamp * 1000 + offsets;
            fetch('https://api.sunrise-sunset.org/json?lat='+lat+'&lng='+lng+'&formatted=0')
                .then(response => response.json())
                .then(data => {
                    return dispatch({
                        type: actionTypes.SET_CURRENT_TIME,
                        payload: new Date(data.results.sunset) > localTime ? 'Day' : 'Night'
                    });
                });
        });
};

