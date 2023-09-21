import "./App.scoped.css"
import Bt1 from "./components/bt1";
import Card from "./components/card";
import Navbar from "./components/nav";
import Filter from "./components/filter"
import Bt2 from "./components/bt2";
import dorms from "./data/dorms";
import axios from "axios";
import { useEffect, useState,useMemo } from "react";
import { useNavigate,useLocation } from "react-router";


function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

    
function Main() {
    const [dormlist, setdormlist] = useState([]);
    const [checkStatus, setcheckStatus] = useState({
        price:{
            "3000-4000":false,
            "4000-5000":false,
            "5000-6000":false
        },
        distance:{
            "100-200":false,
            "200-300":false,
            "300-400":false,
        }
});
    const navi =  useNavigate()
    const query = useQuery()
    const location = useLocation()

    useEffect(() => {
        const url = 'http://localhost:3001/'
        axios.post(url,{
            minprice:parseInt(query.get("minprice")),
            maxprice:parseInt(query.get("maxprice"))
        }).then((response) =>{
        setdormlist(response.data);
        console.log("update");
        }).catch((err) =>{console.log(err)});
    },[location]);

    
    const dormCard = dormlist.map((dorm,index) => {
        return <Card key={index} dorm={dorm}></Card>
    })


    const Check = (minprice,maxprice) =>{
        const url = `/?minprice=${minprice}&maxprice=${maxprice}`
        navi(url)
    }

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
                        <Filter section="price">
                            <p><input type="checkbox"/> 3000-4000บาท</p>
                            <p><input type="checkbox"  onChange={()=>Check(4000,5000)}/> 4000-5000บาท</p>
                            <p><input type="checkbox"/> 5000-6000บาท</p>
                        </Filter>
                        <Filter section="ระยะทาง">
                            <p><input type="checkbox"/> 100ม.</p>
                            <p><input type="checkbox"/> 200ม.</p>
                            <p><input type="checkbox"/> 300ม.</p>
                        </Filter>
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