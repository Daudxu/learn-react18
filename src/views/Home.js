import '../App.css'
import logo from '../logo.svg';
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

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
      </div>
    </div>
  );
}

export default Home;
