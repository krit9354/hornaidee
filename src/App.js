import "./App.css"
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
                    <Card></Card>
                </div>
            </div>
        </div>
    )
}

export default Main;