import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login.tsx'
import ClientList from './pages/Client/ClientList.tsx'
import ClientDetail from './pages/Client/ClientDetail.tsx'
import { AppRoutes } from '../utils/routes/AppRoutes.ts'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateAccount from './pages/CreateAccount/CreateAccount.tsx'
import { RestServiceContext } from './Contexts/RestServiceContext.ts'
import { RestService } from './Services/RestService.ts'

const router = createBrowserRouter([
  {
    path: AppRoutes.LOGIN,
    element: <Login/>
  },
  {
    path: AppRoutes.CREATE_ACCOUNT,
    element: <CreateAccount/>
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

const restService = new RestService();

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <RouterProvider router={router}/>
//     <RestServiceContext.Provider value={restService}>
//       <App>

//       </App>
//     </RestServiceContext.Provider>
//   </React.StrictMode>,
// )
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <RestServiceContext.Provider value={restService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RestServiceContext.Provider>
    </RouterProvider>
  </React.StrictMode>
);

