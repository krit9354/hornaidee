
import "./nav.css"
import Bt from "./bt";
function Navbar(){
    return(
        <div className="nav">
            <div className="container flex">
                <div className="right_nav">
                    <h1>band logo</h1>
                    <p>chat</p>
                </div>
                <div className="left_nav">
                    <Bt text="login"></Bt>
                    <Bt text="register"></Bt>  
                </div>
            </div>
        </div>
    )
}
export default Navbar;