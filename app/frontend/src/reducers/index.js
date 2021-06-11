import { combineReducers } from "redux";
import tasks from "./tasks";
import auth from "./auth";

const rootReducers = combineReducers({
    tasks,
    auth
});

export default rootReducers;