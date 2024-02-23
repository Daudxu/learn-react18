import { Navigate } from 'react-router-dom'

import Home from '../views/Home'
import First from '../views/First'
import About from '../views/About'
import Detail from '../views/Detail'
import Admin from '../views/Admin'
import Welcome from '../views/Welcome'
import User from '../views/User'
import Greeting from '../views/Greeting'

const router = [
  { path: '/', element: <Navigate to="/home" replace /> },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/first',
    element: <First />
  },
  {
    path: '/greeting',
    element: <Greeting />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/detail/:id',
    element: <Detail />
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      { index: true, element: <Navigate to="/admin/welcome" replace /> },
      {
        path: 'welcome',
        element: <Welcome />
      },
      {
        path: 'user',
        element: <User />
      }
    ]
  }
]


export default router;