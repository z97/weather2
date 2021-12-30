import React, {ChangeEvent, useState} from 'react';
import {getWeatherAction} from "../actions/weatherAction";
import {useDispatch} from "react-redux";

const Form = () => {
    const [city, setCity] = useState<string>('');
    const dispatch = useDispatch();

    const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    const handleGetWeatherClick = () => {
        dispatch(getWeatherAction(city.trim()));
        setCity('');
    }

    return (
        <div>
            <input
                onChange={handleCityChange}
                type='text'
                placeholder='city'
                value={city}
            />
            <button onClick={handleGetWeatherClick}>Get weather</button>
        </div>
    );

}

export default Form;
