
import "./nav.scoped.css"
import Bt1 from "./bt1";
import Bt2 from "./bt2";
function Navbar(){
    return(
        <div className="nav">
            <div className="container">
                <div className="left_nav">
                    <h1>band logo</h1>
                    
                </div>
                <div className="right_nav">
                    <p>chat</p>
                    <div className="line"></div>
                    <Bt1>login</Bt1>
                    <Bt2>register</Bt2>
                </div>
            </div>
        </div>
    )
}
export default Navbar;