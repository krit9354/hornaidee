import { ArrowDropUp,ArrowDropDown } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Message(props) {
    const {message} = props

    return(
        <div className=' border-b border-dashed border-gray'>
            <p>{message.sender} :</p>
            <p>{message.message_text}</p>
        </div>
    )
}


function Ticket(props) {
    const navi = useNavigate()
    const {ticket} = props
    const [ status , setStatus ] = useState(false)
    const [ ticketData , setticketData ] = useState([])
    const [ ticketMessage , setticketticketMessage ] = useState("")
    const open = () => setStatus(!status)
    useEffect(() => {
        const url = "http://localhost:3001/ticketMessage"
        axios.get(url,{
            params: {
                ticket_id : ticket.ticket_id
            }
          }).then((response) =>{
        setticketData(response.data);
        console.log("response")
        console.log(response.data)
        }).catch((err) =>{
            console.log(err)
            navi("/error")
        });
    },[ticket]);

    useEffect(() => {
        setticketticketMessage(
            ticketData
            .map((ticket, index) => {
              return (
                <Message key={index} message={ticket}/>
              );
            })
        );

      }, [ticketData]);

    const color_status = () => {
        if (ticket.status == 'completed'){
            return "#36B37E"
        }else if(ticket.status == 'on hold'){
            return "#FFAB00"
        }else if(ticket.status == 'in progress'){
            return "#00B8D9"
        }
    }


    return (
        <div className='w-full border-b border-gray border-solid'>
            <div className="head h-10 ">
                <div className="grid" style={{gridTemplateColumns:"1fr 4fr 2fr 2fr 1fr"}}>
                    <p className=" text-center">{ticket.ticket_id}</p>
                    <p className="ml-4">{ticket.subject}</p>
                    <p className=' m-auto flex items-center'>
                        <div className="w-3 h-3 ${} rounded-full mr-2" style={{backgroundColor:color_status()}}/>
                        {ticket.status}
                    </p>
                    <p className=" text-center">{ticket.update.slice(0,10)}</p>
                    <ArrowDropDown onClick={open} style={{transform:status?"scale(-1)":"scale(1)"}}></ArrowDropDown>
                </div>
            </div>
            <div className="detail border-gray border-dashed" style={{borderTopWidth:status?"1px":"0"}}>
                {status?ticketMessage:undefined}
                <div className="send w-full flex" style={{height:status?"auto":"0"}}>
                    <input
                        className="mr-2 my-1 h-[34px]  p-2  border border-solid border-black rounded"
                        style={{height:status?"auto":"0",width:status?"100%":"0",opacity:status?"1":"0"}}
                        type="text"
                        placeholder="send message...."
                    />
                    <img className='h-11' style={{opacity:status?"1":"0"}} src="\img\Telegram App.png"/>
                </div>
            </div>
        </div>
    )
}

export default Ticket;