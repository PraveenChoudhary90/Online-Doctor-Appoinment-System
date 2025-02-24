import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import TopMenu from "./component/Topmenu";

const Layout = ()=>{
    return(
        <>
        <TopMenu/>
        <main style={{margin:"50px"}}><Outlet/></main>
        <Footer/>
        </>
    )
}

export default Layout;