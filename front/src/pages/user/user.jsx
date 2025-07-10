import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchUserProfile, editUsername } from '../../redux/actions/user.actions.jsx'
import AccountCard from '../../components/accountCard/accountCard.jsx'
import InputField from '../../components/inputField/inputField.jsx'
import './user.css'

function User() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const token = useSelector(state => state.auth.token)
    const userData = useSelector(state => state.user.userData)

    /* Redirection si non connecté */
    useEffect(() => {
        if (!token) navigate('/signin')
    }, [token])

    /* Chargement du profil */
    useEffect(() => {
        if (token) {
            dispatch(fetchUserProfile(token))
        }
    }, [token, dispatch])

    /* État local d’édition */
    const [editMode, setEditMode] = useState(false)
    const [newName, setNewName] = useState(userData.userName || '')

    /* Mise à jour du champ quand les données sont disponibles */
    useEffect(() => {
        if (userData.userName) setNewName(userData.userName)
    }, [userData.userName])

    const handleSave = () => {
        if (!newName.trim()) return
        dispatch(editUsername(newName, token))
        setEditMode(false)
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                {!editMode ? (
                    <>
                        <h1>Welcome back<br />{userData.userName}!</h1>
                        <button className="edit-button" onClick={() => setEditMode(true)}>Edit Name</button>
                    </>
                ) : (
                    <div className="edit-user-form">
                        <h1>Edit user info</h1>

                        <InputField
                            className="input-row"
                            label="User name:"
                            type="text"
                            id="username"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                        
                        <InputField
                            className="input-row"
                            label="First name:"
                            type="text"
                            id="firstName"
                            value={userData.firstName || ''}
                            disabled
                        />

                        <InputField
                            className="input-row"
                            label="Last name:"
                            type="text"
                            id="lastName"
                            value={userData.lastName || ''}
                            disabled
                        />

                        <div className="button-group">
                            <button className="save-button" onClick={handleSave}>Save</button>
                            <button className="cancel-button" onClick={() => setEditMode(false)}>Cancel</button>
                        </div>
                    </div>
                )}
            </div>

            <h2 className="sr-only">Accounts</h2>

                <AccountCard
                    title="Argent Bank Checking (x8349)"
                    amount="$2,082.79"
                    description="Available Balance"
                />


            <AccountCard
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                description="View transactions"
            />

            <AccountCard
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                description="Current Balance"
            />
        </main>
    )
}
export default User