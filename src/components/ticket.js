import React, { useState } from 'react'

function Ticket(props) {
    const {ticket} = props
    const [ status , setStatus ] = useState(false)
    const open = () => setStatus(!status)
    console.log(ticket.update)
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
                    <p className='mr-4 ml-auto' onClick={open}>{status?'-':'+'}</p>
                </div>
            </div>
            <div className="detail">

            </div>
        </div>
    )
}

export default Ticket;