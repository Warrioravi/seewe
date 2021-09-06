import { combineReducers } from "redux";
import detailsReducer from "./reducers/detailsReducer";
import templateReducer from "./reducers/templateReducer";
import userReducer from "./reducers/userReducer";

let rootReducer = combineReducers({
  template: templateReducer,
  user: userReducer,
  details:detailsReducer,
});

export default rootReducer;