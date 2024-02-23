import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

const App = () => {
  const routeElement = useRoutes(routes)

  return (
    <div>
      {routeElement}
    </div>
  )
}

export default App
