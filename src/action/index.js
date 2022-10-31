import {Getdata , GetBlog } from "../constant";

export const  Filterdataproduct = (actionpara) => ({
      type: Getdata ,
      payload: actionpara,
  });


  export const  FilterDataBlog = (BlogpageNO) => ({
    type: GetBlog,
    payload: BlogpageNO,
});
  