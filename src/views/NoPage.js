import { useNavigate } from 'react-router-dom'

function NoPage() {
    const navigate = useNavigate()
    return (
        <div>
           没有这个页面
           <button onClick={()=>navigate('/')}>返回首页</button>
        </div>
    )
}

export default NoPage;