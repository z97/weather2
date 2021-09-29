import {PUT_MESSAGE, PUT_WEATHER_INFO} from "../actions/weatherAction";
import {State, Action} from "../types";

const initialState: State = {
    message: 'Enter city name'
}

export const weatherReducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case PUT_WEATHER_INFO:
            return {...state, weatherInfo: action.payload, message: null}
        case PUT_MESSAGE:
            return {...state, message: action.payload}
        default:
            return state;
    }
}