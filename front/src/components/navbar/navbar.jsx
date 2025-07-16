import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/auth.actions.jsx'

function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)
    const userData = useSelector(state => state.user.userData)

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
        navigate('/')
    }

    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src="/img/argentBankLogo.webp"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            <div className="main-nav-items">
                {token ? (
                    <>
                        <NavLink className="main-nav-item" to="/user">
                            <span className="user-name">{userData.userName}</span>
                            <i className="fa fa-user-circle"></i> 
                        </NavLink>
                        <NavLink className="main-nav-item" to="/user">
                            <i className="fa fa-gear"></i>
                        </NavLink>
                        <NavLink className="main-nav-item" to="/" onClick={handleLogout}>
                            <i className="fa fa-power-off"></i>
                        </NavLink>
                    </>
                ) : (
                    <NavLink className="main-nav-item" to="/signin">
                        <i className="fa fa-user-circle"></i> Sign In
                    </NavLink>
                )}
            </div>
        </nav>
    )
}
export default Navbar