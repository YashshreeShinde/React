import { ROLE_PAGE_MAP } from "../../../Utils/Utility";
import { useEffect } from "react";
import { IActionPopUp } from "./App.types";

export const APP_ACTIONS:any = {
  LOGIN: "LOGIN",
  SET_POPUP: "SET_POPUP",
  SHOW_POPUP: "SHOW_POPUP",
};

export const setApp = (state: any, action: any) => {
  switch (action.type) {
    case APP_ACTIONS.LOGIN: {
   
      console.log(state.role);
      return {
        ...state,
        username: action.username,
        accessToken: action.token,
        role: action.role,
      };
    }
    case APP_ACTIONS.SET_POPUP: {
      const { type, message } = action.payload;
      return {
        ...state,
        popUpState: true,
        type: type,
        message: message,
      };
    }

    case APP_ACTIONS.SHOW_POPUP: {
      return { ...state, popUpState: false };
    }
    default:
      return state;
  }
};

// export const setPopUpReducer = (state: IStatePopUp, action: IActionPopUp) => {
//   switch (action.type) {
//     case APP_ACTIONS.SET_POPUP: {
//       const { type, message } = action.payload;
//       return {
//         popUpState: true,
//         type: type,
//         message: message,
//       };
//     }

//     case APP_ACTIONS.SHOW_POPUP: {
//       return { ...state, popUpState: true };
//     }
//     default:
//       return state;
//   }
// };
