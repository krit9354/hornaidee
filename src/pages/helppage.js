import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Bt1 from "../components/bt1";
import Navbar from "../components/nav";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Diversity1Outlined } from "@mui/icons-material";
import Filter from "../components/filter";
import Ticket from "../components/ticket";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function Helppage() {
  const location = useLocation();
  const { ticketID } = useParams();
  const [searchFilter, setsearchFilter] = useState("");
  const [ticketData, setTicketData] = useState([{
    ticket_id : "loading",
    subject : "loading",
    status : "loading",
    update : "loading"
  }]
);
  // const [tickets, setTickets] = useState('');
  const navi = useNavigate();
  useEffect(() => {
    const url = 'http://localhost:3001/ticket'
    axios.get(url).then((response) =>{
    setTicketData(response.data);
    console.log("ticketDat")
    console.log(ticketData)
    }).catch((err) =>{
      navi("/error")
    });
  },[location]);


  const tickets =   ticketData.filter((ticket) => {
          if (searchFilter != ""){
            return ticket.ticket_id == Number(searchFilter);
          } else {
            return ticket
          }
        }).map((ticket, index) => {
            return (
              <Ticket key={index} ticket={ticket}/>
            );
          });

  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-old_yellow h-screen p-4 min-h-screen">
        <div className="bg-white container m-auto w-[1050px] p-3 rounded-2xl min-h-full">
          <div className="search flex justify-end items-center my-5">
              <input
                value={searchFilter}
                onChange={(event) => setsearchFilter(event.target.value)}
                className="mr-2 h-[34px] rounded  p-2 bg-cream border border-solid border-black"
                type="text"
                placeholder="find ticket...."
              />
          </div>
          <div className="content flex gap-4 w-full">
            <div>
              <Filter section="filter">
                <p><input type="radio" name="filter" className="mr-1"/>all</p>
                <p><input type="radio" name="filter" className="mr-1"/>on hold</p>
                <p><input type="radio" name="filter" className="mr-1"/>in progress</p>
                <p><input type="radio" name="filter" className="mr-1"/>completed</p>
              </Filter>
            </div>
            <div className="grid grid-cols-1 w-full">
              <div className="grid h-10 border-y border-gray border-solid" style={{gridTemplateColumns:"1fr 4fr 2fr 2fr 1fr"}}>
                  <p className=" text-center">ticket</p>
                  <p  className="ml-4">subject</p>
                  <p className=" text-center">status</p>
                  <p className=" text-center">last update</p>
              </div>
              {tickets}
            </div>
          </div>
        </div>
            </div>
      </div>
  );
}

export default Helppage;