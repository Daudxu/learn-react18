import { Routes, Route, NavLink, Navigate } from 'react-router-dom'

import './App.css';
import Home from './views/Home'
import About from './views/About'
import NoPage from './views/NoPage'
import Detail from './views/Detail'
import Admin from './views/Admin';


function App() {
  return (
    <div className="App">
          <div>
          <NavLink end to="/" state={{ id: 1000 }}>首页</NavLink>
          <span> --- </span>
          <NavLink to="/about">关于</NavLink>
          <span> --- </span>
          <NavLink to="/admin">后台</NavLink>
      </div>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin' element={<Admin />} />
        {/* 动态路由参数定义 */}
        <Route path="/detail/:id" element={<Detail />} />
         {/* 重定向 */}
         <Route path="/" element={<Navigate to="/home" replace={false} />} />
        {/* 404页面处理 */}
        <Route path="*" element={<NoPage/>} />

      </Routes>
    </div>
  );
}

export default App;
