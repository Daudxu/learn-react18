import { NavLink } from "react-router-dom";

function Admin() {
    return (
        <div>
            <h1>后台管理</h1>
            <div>
                <NavLink to="/admin">
                    首页
                </NavLink>
                
                <NavLink to="/admin/user">
                    用户
                </NavLink>
                
            </div>
            <hr />
            {/* <Outlet /> */}
        </div>
    )
}

export default Admin;