import { useState } from "react"
import Bt1 from "./bt1"

function Help(){
    const [Clickhelp, setClickhelp] = useState([false,{height:"0px",width:"0px",opacity:"0"}])
    const onClikehelp = () => {
        if (Clickhelp[0]){
            setClickhelp([false,{height:"0px",width:"0px",opacity:"0"}])
        }else{
            setClickhelp([true,{height:"200px",width:"20%",opacity:"1"}])
        }
    }
    return (
        <div>
            <div  className="fixed right-6 bottom-20 box-border transition-all" style={Clickhelp[1]}>
                <div className="help_box h-full w-full border-2 border-solid border-black rounded-lg relative right-16 bg-white p-3">
                    <p className="mb-1">Do you need help?</p>
                    <textarea placeholder="type someting ..." className="p-2 border border-solid border-gray-500 rounded-lg h-3/5 w-full resize-none">
                    </textarea>
                    <Bt1>send</Bt1>
                </div>
            </div>
                <img onClick={onClikehelp} src="/img/help.png" className="w-16 h-16 ml-auto fixed right-6 bottom-4"/>
        </div>
    )
}

export default Help