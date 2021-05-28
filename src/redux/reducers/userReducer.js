import { LOGIN, LOGOUT, SET_ACCESS, EDIT_USER} from '../actions/constants';

const initialState = {
    user: null,
    access_modules: [],
    all_modules: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.data.user,
                token: action.data.token,
            };
        case SET_ACCESS:
            return { ...state, access_modules: action.data }
        case LOGOUT:
            return { ...state, user: null, token: null };

        case EDIT_USER:
            return { ...state, user: action.data.user };

        default:
            return state;
    }
}