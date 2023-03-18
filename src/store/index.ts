import { createStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk))