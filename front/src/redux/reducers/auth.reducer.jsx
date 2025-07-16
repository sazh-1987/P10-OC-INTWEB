import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, LOGIN_REQUEST } from "../actions/type.actions";

const tokenFromStorage = localStorage.getItem("token")

/* Initial state of authentication */
const initialState = {
    status: "VOID",
    token: tokenFromStorage,
    isConnected: !!tokenFromStorage,
    error: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { 
                ...state, 
                status: "PENDING", 
                error: null 
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload)
            return {
                ...state,
                status: "SUCCEEDED",
                isConnected: true,
                token: action.payload,
                error: null
            }
        
        case LOGIN_FAIL: {
            return {
                ...state,
                status: "FAILED",
                isConnected: false,
                error: action.payload
            }
        }  
        case LOGOUT: {
            localStorage.removeItem("token")
            return {
                ...state,
                token: null,
                isConnected: false,
                status: "VOID",
                error: null
            }
        }  
        default:
            return state;
    }
}