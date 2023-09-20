
import "./nav.scoped.css"
import Bt1 from "./bt1";
import Bt2 from "./bt2";
function Navbar(){
    return(
        <div className="nav">
            <div className="container">
                <div className="left_nav">
                    <h1>band logo</h1>
                    <div className="line"></div>
                    <p>chat</p>
                </div>
                <div className="right_nav">
                    <Bt1 text="login"></Bt1>
                    <Bt2 text="register"></Bt2>
                </div>
            </div>
        </div>
    )
}
export default Navbar;