import '../App.css'
// import logo from '../logo.svg';
// import { useNavigate, useSearchParams, useParams, useLocation, NavLink } from 'react-router-dom'
import {  NavLink } from 'react-router-dom'

function Home() {
  // const location = useLocation()
  // const navigate = useNavigate()
  // const params = useParams()
  // const [search, setSearch] = useSearchParams()

  return (
    <div className="App">
      <header className="App-header">
        <div className='cl-nav'>
          <NavLink to="/home" className="cl-a">首页</NavLink>
          <NavLink to="/first">第一个组件</NavLink>
          <NavLink to="/greeting">Greeting</NavLink>
          <NavLink to="/about">关于</NavLink>
          <NavLink to="/admin">后台</NavLink>
        </div>
      </header>
    </div>
  );
}

export default Home;
