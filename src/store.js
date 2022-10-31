import { createStore } from "redux";
import  rootRedusers from "./reducers/index";
//create store and put rootredusers combined orr singel
const store = createStore(
    rootRedusers ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  export default store;