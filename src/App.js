import "./App.scoped.css"
import Bt from "./components/bt";
import Card from "./components/card";
import Navbar from "./components/nav";

function Main() {
    return(
        <div className="Main">
            <Navbar/>
            <img src="/img/banner (1).svg" alt="banner" className="banner"/>
            <div className="container">
                <div className="search">
                    <input type="text"/>
                    <Bt text="seach"/>
                </div>
                <div>
                    <Card url="https://th.bing.com/th/id/OIP.HJPHH7ynTGyNaz0t_3esDgAAAA?pid=ImgDet&rs=1" dorm_name="hello_house" price="5000" distance="100"></Card>
                    
                </div>
            </div>
        </div>
    )
}

export default Main;