import { types } from "./types";
  
  export function addNumberAction(number) {
    return {
      type: types.ADD_NUMBER,
      payload: number,
    };
  }
  
  export function clearListAction() {
    return {
      type: types.CLEAR_LIST,
    };
  }
  