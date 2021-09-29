import {applyMiddleware, createStore} from "redux";
import {weatherReducer} from "../reducers/weatherReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(weatherReducer, composeWithDevTools(applyMiddleware(thunk, logger)));