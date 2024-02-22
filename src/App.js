import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom'

import './App.css';
import Home from './views/Home'
import About from './views/About'
import NoPage from './views/NoPage'


function App() {
  return (
    <div className="App">
          <div>
          <NavLink end to="/" state={{ id: 1000 }}>首页</NavLink>
          <span> --- </span>
          <NavLink to="/about">关于</NavLink>
      </div>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
         {/* 重定向 */}
         <Route path="/" element={<Navigate to="/home" replace={false} />} />
        {/* 404页面处理 */}
        <Route path="*" element={<NoPage/>} />
        
      </Routes>
    </div>
  );
}

export default App;
