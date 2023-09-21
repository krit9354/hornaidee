import "./App.scoped.css"
import Bt1 from "./components/bt1";
import Card from "./components/card";
import Navbar from "./components/nav";
import Filter from "./components/filter"
import Bt2 from "./components/bt2";
import dorms from "./data/dorms";
import axios from "axios";
import { useEffect, useState } from "react";



    
function Main() {
    const [dormlist, setdormlist] = useState([]);
    const [ filterStatus , setFilterStatus] = useState(false);


    const openFilter = () => setFilterStatus(!filterStatus)

    useEffect(() => {
        axios.get("http://localhost:3001/").then((response) =>{
        setdormlist(response.data);
        console.log("update");
        });
    },[]);

    
    const dormCard = dormlist.map((dorm,index) => {
        return <Card key={index} dorm={dorm}></Card>
    })

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
                        <Filter section="price" onclick={openFilter}></Filter>
                        <Filter section="ระยะทาง"></Filter>
                    </div>
                    <div className="grid">
                        {dormCard}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;