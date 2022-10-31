import { combineReducers } from "redux";
import { Reducer1} from "./reducers1";


const  rootRedusers = combineReducers({
    layer1 : Reducer1 ,
 })
 
 export default rootRedusers;