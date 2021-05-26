import { UseractionType } from "./user.types";

let INITIAL_STATE = {
  loading: false,
  user: null,
  token: null,
  error: null,
};

export default function UserReducer(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case UseractionType.SEND_OTP_START:
      return {
        ...state,
        loading: true,
      };
    case UseractionType.SEND_OTP_FINISHED:
      return {
        ...state,
        loading: false,
      };
    case UseractionType.SEND_OTP_ERROR:
      return {
        ...state,
        error: actions.payload.error,
        loading: false,
      };
    case UseractionType.LOGIN_START:
      return {
        loading: true,
      };
    case UseractionType.LOGIN_FINISHED:
      return {
        ...state,
        user: actions.payload.user,
        token: actions.payload.token,
        loading: false,
      };
    case UseractionType.LOGIN_ERROR:
      return {
        ...state,
        error: actions.payload.error,
        loading: false,
      };

    case UseractionType.SET_USER_AND_TOKEN:
      return {
        ...state,
        token: actions.payload.token,
        user: actions.payload.user,
        loading: false,
      };
    case UseractionType.USER_SET: {
      let payload = actions.payload;
      return {
        ...state,
        user: payload.user,
      };
    }
    default:
      return state;
  }
}
