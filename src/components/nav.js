
import "./nav.scoped.css"
import Bt1 from "./bt1";
import Bt2 from "./bt2";
function Navbar(){
    return(
        <div className="nav w-full">
            <div className="container h-full items-center m-auto flex ">
                <div className="left_nav items-center">
                    <h1>band logo</h1>
                    
                </div>
                <div className="right_nav items-center">
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