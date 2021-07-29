import {initialState} from './initialState';
import * as t from './actionTypes';

export default function loginReducer(state = initialState, action) {
    switch (action.type){
        case t.SET_LOGIN_STATE:
            return {
                ...state,
                ...action.payload,
                isLoggedIn: true
            };
        case t.SET_LOGOUT_STATE:
            return {
                ...state,
                ...action.payload,
                isLoggedIn: false
            }
        default: 
            return state;
    }
};