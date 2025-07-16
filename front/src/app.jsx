import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from './routes/routes.jsx'
import '../public/css/main.css'
import store from './redux/store.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router = { Router } />
        </Provider>
    </StrictMode>
)