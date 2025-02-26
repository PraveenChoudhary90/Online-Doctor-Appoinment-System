import { useNavigate } from "react-router-dom";


const Dashboard = ()=>{
    const navigate = useNavigate();

  const Logout = ()=>{
    localStorage.clear();
    navigate("/login")
  }

    return(
        <>
        <h1>Dashboard page</h1>
Welcome:{localStorage.getItem("name")}<br></br>
email:{localStorage.getItem("email")}<br></br>
<button onClick={Logout} >Logout</button>

        </>
    )
}

export default Dashboard;