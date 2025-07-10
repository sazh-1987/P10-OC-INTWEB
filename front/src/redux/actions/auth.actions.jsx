import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, LOGIN_REQUEST } from "./type.actions";
import { fetchUserProfile } from "./user.actions"

/* Authentication actions */
export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token,
    }
}

export const loginFailed = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error,
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
} 


export const loginUser = ({ email, password, rememberMe }) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })               // status: PENDING
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
        })
        if (!response.ok) throw new Error("Invalid credentials")
        const data  = await response.json()
        const token = data.body.token

        // ✅ Sauvegarde le token si rememberMe
        if (rememberMe) {
         localStorage.setItem("token", token)
        }

        dispatch(loginSuccess(token))                 // status: SUCCEEDED
        dispatch(fetchUserProfile(token))             // enchaîne le profil
    } catch (err) {
        dispatch(loginFailed(err.message))            // status: FAILED
    }
}