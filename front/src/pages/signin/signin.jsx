 import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/actions/auth.actions.jsx'
import { useNavigate } from 'react-router-dom'
import LoaderButton from '../../components/loaderButton/loaderButton.jsx'
import InputField from '../../components/inputField/inputField.jsx'
import ErrorMessage from '../../components/errorMessage/errorMessage.jsx'

function Signin() {
    const [email, setEmail]       = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { token, status, error } = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser({ email, password, rememberMe }))
    }

    /* Redirection si connexion réussie */
    useEffect(() => {
        if (token) navigate('/user')
    }, [token, navigate])

    if (token) return null
    
    return (
        <main className="main bg-dark">
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit}>
                <InputField
                    label="Username"
                    type="email"
                    id="username"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="input-remember">
                <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="remember-me">Remember me</label>
                </div>

                {status === 'FAILED' && <ErrorMessage message={error} />}
                
                <LoaderButton
                    type="submit"
                    className="sign-in-button"
                    loading={status === 'PENDING'}
                    disabled={!email || !password}
                    >
                    Sign In
                </LoaderButton>
            </form>

        </section>
        </main>
    )
}
export default Signin