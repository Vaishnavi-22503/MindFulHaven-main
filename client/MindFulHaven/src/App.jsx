import './App.css'
import Dashboard from './Components/DashBoard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

import{
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  Navigate
  } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/Dashboard',
    element: <div><Dashboard/></div>
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
