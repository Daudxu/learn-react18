import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './router'

const App = () => {
  const routeElement = useRoutes(routes)

  return (
    <div>
      <div>
        <NavLink to="/home">首页</NavLink>
        <span> --- </span>
        <NavLink to="/about">关于</NavLink>
        <span> --- </span>
        <NavLink to="/admin">后台</NavLink>
      </div>
      <hr />
      {routeElement}
    </div>
  )
}

export default App
