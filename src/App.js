import "./App.scoped.css"
import Bt1 from "./components/bt1";
import Card from "./components/card";
import Navbar from "./components/nav";
import Filter from "./components/filter"
import Bt2 from "./components/bt2";
import dorms from "./data/dorms";
import axios from "axios";
import Choice from "./components/choice";
import { useEffect, useState,useMemo } from "react";
import { useNavigate,useLocation } from "react-router";



function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

    
function Main() {
    const [dormlist, setdormlist] = useState([]);
    let checkStatus={
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
    };
    const navi =  useNavigate()
    const query = useQuery()
    const location = useLocation()

    useEffect(() => {
        const url = 'http://localhost:3001/'
        axios.post(url,{
            price_range:parseInt(query.get("price_range")),
            distance_range:parseInt(query.get("distance_range"))
        }).then((response) =>{
        setdormlist(response.data);
        console.log("update");
        }).catch((err) =>{console.log(err)});
    },[location]);


    const dormCard = dormlist.map((dorm,index) => {
        return <Card key={index} dorm={dorm}></Card>
    })


    const Check = (Price,Distance) =>{
        Price ? checkStatus.price[Price] = !checkStatus.price[Price]:checkStatus.price[Price] = checkStatus.price[Price]
        Distance ? checkStatus.distance[Distance] = !checkStatus.distance[Distance]:checkStatus.distance[Distance] = checkStatus.distance[Distance]
    };

    const clickFilter = () =>{
        let price_range = ""
        let distance_range = ""
        for (let [key, value] of Object.entries(checkStatus.price)) {
            if(value){price_range+=key+','}
        }
        for (let [key, value] of Object.entries(checkStatus.distance)) {
            if(value){distance_range+=key+','}
        }
        const url_filter = `/?price_range=${price_range}&distance_range=${distance_range}`
        navi(url_filter)
    }
    

    return(
        <div className="Main">
            <Navbar/>
            <img src="/img/banner (1).svg" alt="banner" className="banner"/>
            <div className="container">
                <div className="search">
                    <input type="text"/>
                    <Bt1>search</Bt1>
                </div>
                <div className="content">
                    <div className="filter">
                        <Filter section="price">
                            <Choice Check={Check} price="3000-4000">3,000-4,000 บาท</Choice>
                            <Choice Check={Check} price="4000-5000">4,000-5,000 บาท</Choice>
                            <Choice Check={Check} price="5000-6000">5,000-6,000 บาท</Choice>
                        </Filter>
                        <Filter section="ระยะทาง">
                            <Choice Check={Check} distance="0-100">0-100ม.</Choice>
                            <Choice Check={Check} distance="100-200">100-200ม.</Choice>
                            <Choice Check={Check} distance="200-300">200-300ม.</Choice>
                        </Filter>
                        <button className="btn-filter" onClick={clickFilter}>
                            <img src="/img/search.png" style={{width:"30px",marginRight:"5px"}}/>
                            Filter
                            <img src="/img/search.png" style={{width:"30px",opacity:"0"}}/>
                            </button>
                    </div>
                    <div className="grid w-full">
                        {dormCard}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;