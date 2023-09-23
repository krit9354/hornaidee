import Navbar from "../components/nav";
import PersonCard from "../components/person_card";
function Chat(){
    return(
        <div className="h-screen">
            <Navbar></Navbar>
            <div className="flex h-full">
                <div className="left w-1/3 h-full border-black border-solid border-r">
                    <div className="head text-white bg-brown h-12 flex items-center">Chat</div>
                    <div className="search m-auto justify-center flex my-4">
                        <input className="border-black border-solid border rounded-xl w-5/6 h-8 p-4" type="text" />
                    </div>
                    <div className="people">
                        <PersonCard></PersonCard>
                        <PersonCard></PersonCard>
                        <PersonCard></PersonCard>
                    </div>
                </div>
                <div className="right">
                    <div className="name"></div>
                    <div className="chat"></div>
                    <div className="text_box"></div>
                </div>
            </div>
            
        </div>
    )
}
export default Chat;