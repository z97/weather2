import React from 'react';
import {connect} from "react-redux";
import {State} from "../types";

type Props = State;

const Weather: React.FC<Props> = ({message, weatherInfo}) => {

    return (
        <div className='infoWeath'>
            {!message &&
            <div>
                <p>Location: {weatherInfo!.country}, {weatherInfo!.city}</p>
                <p>Temp: {weatherInfo!.temp}</p>
                <p>Pressure: {weatherInfo!.pressure}</p>
                <p>Sunset: {new Date(weatherInfo!.sunset * 1000).toTimeString()}</p>
            </div>
            }
            <p>{message}</p>
        </div>
    );

}

const mapStateToProps = (state: State) => {
    return state;
}

// @ts-ignore
export default connect(mapStateToProps)(Weather);