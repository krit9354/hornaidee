import "./App.scoped.css"
import Bt1 from "./components/bt1";
import Card from "./components/card";
import Navbar from "./components/nav";
import Filter from "./components/filter"
import Bt2 from "./components/bt2";
function Main() {
    return(
        <div className="Main">
            <Navbar/>
            <img src="/img/banner (1).svg" alt="banner" className="banner"/>
            <div className="container">
                <div className="search">
                    <input type="text"/>
                    <Bt1 text="search"></Bt1>
                </div>
                <div className="content">
                    <div className="filter">
                        <Filter section="price"></Filter>
                        <Filter section="ระยะทาง"></Filter>
                    </div>
                    <div className="grid">
                        <Card url="https://th.bing.com/th/id/OIP.HJPHH7ynTGyNaz0t_3esDgAAAA?pid=ImgDet&rs=1" dorm_name="hello_house" price="5000" distance="100"></Card>
                        <Card url="https://th.bing.com/th/id/OIP.HJPHH7ynTGyNaz0t_3esDgAAAA?pid=ImgDet&rs=1" dorm_name="hello_house" price="5000" distance="100"></Card>
                        <Card url="https://th.bing.com/th/id/OIP.HJPHH7ynTGyNaz0t_3esDgAAAA?pid=ImgDet&rs=1" dorm_name="hello_house" price="5000" distance="100"></Card>
                        <Card url="https://th.bing.com/th/id/OIP.HJPHH7ynTGyNaz0t_3esDgAAAA?pid=ImgDet&rs=1" dorm_name="hello_house" price="5000" distance="100"></Card>
                        <Card url="https://th.bing.com/th/id/OIP.HJPHH7ynTGyNaz0t_3esDgAAAA?pid=ImgDet&rs=1" dorm_name="hello_house" price="5000" distance="100"></Card>
                        <Card url="https://th.bing.com/th/id/OIP.HJPHH7ynTGyNaz0t_3esDgAAAA?pid=ImgDet&rs=1" dorm_name="hello_house" price="5000" distance="100"></Card>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Main;