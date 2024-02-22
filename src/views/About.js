import '../App.css'
import { useNavigate } from 'react-router-dom'
function About() {
  const navigate = useNavigate()  
  return (
    <div className="App">
       About
       <div onClick={()=> navigate('/')}>
            返回首页
       </div>
    </div>
  );
}

export default About;
