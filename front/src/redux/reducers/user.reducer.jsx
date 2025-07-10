import { GET_USERPROFILE, EDIT_USERNAME, LOGOUT, USERPROFILE_REQUEST, USERNAME_EDIT_REQUEST } from "../actions/type.actions"

/* Initial user state */
const initialState = {
    status: 'VOID',
    userData: {}
}

export const userReducer = (state = initialState, action ) => {
    switch (action.type) {
        case USERPROFILE_REQUEST:
            return { 
                ...state, 
                status: "PENDING" 
            }
        case GET_USERPROFILE:
            return {
                ...state,
                status: 'SUCCEEDED',
                userData: action.payload
            }
        case USERNAME_EDIT_REQUEST:
            return { 
                ...state, 
                status: "MODIFYING" 
            }
        case EDIT_USERNAME: 
            return {
                ...state,
                status: "MODIFIED",
                userData: {
                    ...state.userData,
                    userName: action.payload
                } 
            } 
        case LOGOUT: {
            return initialState;  
        }   
        default:
            return state;    
    }
}

        