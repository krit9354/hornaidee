
import "./nav.scoped.css"
import Bt1 from "./bt1";
import Bt2 from "./bt2";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div className="nav w-full bg-cream">
            <div className="container h-full items-center m-auto flex">
                <div className="left_nav items-center">
                    <Link to="/"> <img className=" w-36" src="/img/logo_hornaid.png"/></Link>
                    
                </div>
                <div className="right_nav items-center">
                    <Link to="/chat"><p>chat</p></Link>
                    <div className="line"></div>
                    <Link to="/login"><Bt1>login</Bt1></Link>
                    <Link to="/register"><Bt2>register</Bt2></Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;