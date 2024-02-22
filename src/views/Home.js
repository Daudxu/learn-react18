import '../App.css'
import logo from '../logo.svg';
import { useNavigate, useSearchParams, useParams, useLocation } from 'react-router-dom'

function Home() {
    const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  const [search, setSearch] = useSearchParams()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <hr/>
        <button onClick={()=>{
            navigate(-1)
        }}>
            回退
        </button>
        <h3>页面详情</h3>
      <div>动态路由参数id：{params.id}</div>
      <div>state中的数据：{location.state?.name}</div>
      <div>search字符串中的age：{search.get('age')}</div>
        <button
        onClick={() => {
          // 修改之后state中的数据会丢失
          setSearch('?age=100')
        }}
      >
        修改search字符串
      </button>
      </div>
    </div>
  );
}

export default Home;
