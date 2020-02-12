import { createStore, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
import reduxPromise from "redux-promise-middleware";
import app from "../reducers";

const store = createStore(app, {}, applyMiddleware(
    reduxPromise,
    reduxLogger
));

export default store;
