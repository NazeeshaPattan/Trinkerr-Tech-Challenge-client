import { LOGIN, LOGOUT, SET_ACCESS, EDIT_USER } from './constants';

export const addUser = (accessData) => {
    return (dispatch) => {
        dispatch({ type: LOGIN, data: accessData });
    }
};

export const setAccess = (accessData) => {
    return (dispatch) => {
        dispatch({ type: SET_ACCESS, data: accessData });
    }
};

export const removeUser = () => {
    return (dispatch) => {
        return dispatch({ type: LOGOUT });
    }
};

export const updateUser = (accessData) => {
	return (dispatch) => {
        return dispatch({ type: EDIT_USER, data: accessData });
    }
}