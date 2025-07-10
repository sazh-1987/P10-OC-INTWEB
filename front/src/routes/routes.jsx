import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/layout.jsx'
import Home from '../pages/home/home.jsx'
import Signin from '../pages/signin/signin.jsx'
import Error from '../pages/error/error.jsx'
import User from '../pages/user/user.jsx'

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true, // page d'accueil
                element: <Home />
            },
            {
                path: 'signin',
                element: <Signin />
            },
            {
                path: 'user',
                element: <User />
            },
            {
                path: '*',
                element: <Error />
            }
        ]
    }
])
export default Routes

