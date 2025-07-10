import { GET_USERPROFILE, EDIT_USERNAME, USERPROFILE_REQUEST, USERNAME_EDIT_REQUEST } from "./type.actions"

/* User data recovery action */
export const userProfile = (userData) => {
    return {
        type: GET_USERPROFILE,
        payload: userData,
    }
}

/* Username update action */
export const updateUsername = (username) => {
    return {
        type: EDIT_USERNAME,
        payload: username,
    }
}

/* Thunk – lecture profil */
export const fetchUserProfile = (token) => async (dispatch) => {
    dispatch({ type: USERPROFILE_REQUEST })
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.json()
        dispatch(userProfile(data.body))
    } catch (err) {
        console.error("Profile error", err)
    }
}

/* Thunk – édition nom */
export const editUsername = (newName, token) => async (dispatch) => {
    dispatch({ type: USERNAME_EDIT_REQUEST })
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ userName: newName })
        })
        if (!response.ok) throw new Error("Update failed")
        dispatch(updateUsername(newName))
    } catch (err) {
        console.error("Username edit error", err)
    }
}