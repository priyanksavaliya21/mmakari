import {CardData} from "../Database/CardData";
import {Getdata , GetBlog} from "../constant";

//redusers
const inhitialState = CardData;

const  Reducer1 = (state = inhitialState, action) => {
    switch (action.type) {
      case Getdata : 
      let Matchingdata = state.Cards.filter((data)=>data.id === action.payload);

        for(let val of Matchingdata){
         Matchingdata = val ;
        }
       return {
         ...state ,
         Filldata : Matchingdata ,
      };

      case GetBlog :
        let Matchingblog =  state.Entire_market_data.filter((datablog)=> datablog.id.toString() === action.payload );
        for(let val of Matchingblog){
          Matchingblog = val ;
         }
    
         return {
          ...state ,
          Blogpage : Matchingblog ,
       }

       default: return state;
    }
  };

export {Reducer1} ;
 