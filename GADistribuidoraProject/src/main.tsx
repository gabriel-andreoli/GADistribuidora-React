import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login.tsx'
import ClientList from './pages/Client/ClientList.tsx'
import ClientDetail from './pages/Client/ClientDetail.tsx'
import { AppRoutes } from '../utils/routes/AppRoutes.ts'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: AppRoutes.LOGIN,
    element: <Login/>
  }
  // },
  // {
  //   path: '/dash',
  //   element: <App/>,
  //   children: 
  //   [
  //     {
  //       path: '/clientes',
  //       element: <ClientList/>
  //     },
  //     {
  //       path: '/cliente/:id',
  //       element: <ClientDetail/>
  //     }
  //   ]
  // }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
