import { APP_ACTIONS } from "../../Constants/Constants";

export const setApp = (state: any, action: any) => {
  switch (action.type) {
    case APP_ACTIONS.LOGIN: {

      return {
        ...state,
        email: action.email,
        accessToken: action.token,
       
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
    case APP_ACTIONS.LOGOUT: {
      return {
        ...state,
        email: "",
        accessToken: "",
       
      };
    }
    default:
      return state;
  }
};

