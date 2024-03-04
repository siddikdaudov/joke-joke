import { combineReducers } from "redux";
import { jokes } from "./jokes/reducer";

export const rootReducer = combineReducers({ jokes });
