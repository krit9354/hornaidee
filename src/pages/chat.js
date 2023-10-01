
import MessageOwn from "../components/meesageOwn";
import Message from "../components/message";
import Navbar from "../components/nav";
import PersonCard from "../components/person_card";
import "./chat.scoped.css"
function Chat(){
    const student_id = 1;
    const dorm_id = 2;

    return(
        <div className="h-screen box-border">
            <Navbar></Navbar>
            <div className="flex h">
                <div className="left w-1/3 h-full border-black border-solid border-r">
                    <div className="head text-white bg-brown h-14 flex items-center p-4 font-bold text-3xl">Chat</div>
                    <div className="search m-auto justify-center flex my-4">
                        <input className="border-black border-solid border rounded-xl w-5/6 h-8 p-4" type="text" />
                    </div>
                    <div className="people overflow-scroll">
                        <PersonCard></PersonCard> 
                        <PersonCard></PersonCard>
                        <PersonCard></PersonCard>
                        <PersonCard></PersonCard>
                        <PersonCard></PersonCard>
                        <PersonCard></PersonCard>
                        <PersonCard></PersonCard> 
                        <PersonCard></PersonCard>
                        <PersonCard></PersonCard>
                        <PersonCard></PersonCard>
                        <PersonCard></PersonCard>
                        <PersonCard></PersonCard>
                    </div>
                </div>
                <div className="chat w-2/3 ">
                    <div className="name text-black font-normal bg-brown h-14 flex items-center p-4 text-3xl">Ulike apartment</div>
                    <div className="chat overflow-scroll">
                        <Message>ldkfjg;ldkfj;lkj;lkj;lkj;ljflak;sdjflk;sja;lkfjsdlkafjlsdak;jf;lksdajfl;sjalf;kjsadl;kfjslak;djfl;askdjflj</Message>
                        <MessageOwn>ae'gisdpoipoasifpsoidfoiddfdfdffoisadposaidfasoiufoiuoiewuroiuewroiu</MessageOwn>
                        <Message>hello</Message>
                        <MessageOwn>hello</MessageOwn>
                        <Message>hello</Message>
                        <MessageOwn>hello</MessageOwn>
                        <Message>hello</Message>
                        <MessageOwn>kuy</MessageOwn>
                        <Message>hello</Message>
                        <MessageOwn>sdfsdf</MessageOwn>
                        <Message>hello</Message>
                        <MessageOwn>sdfdsfsss</MessageOwn>
                        <Message>hello</Message>
                        <MessageOwn>hello</MessageOwn>
                        <Message>hello</Message>
                        <MessageOwn>hello</MessageOwn>
                        <Message>hello</Message>
                        <MessageOwn>hello</MessageOwn>
                        <Message>hello</Message>
                        <MessageOwn>kuy</MessageOwn>
                        <Message>hello</Message>
                        <MessageOwn>sdfsdf</MessageOwn>
                        <Message>hello</Message>
                        <MessageOwn>sdfdsfsss</MessageOwn>
                    </div>
                    <div className="input flex border-black border-solid border-t h-16">
                        <input className="h-16 p-5 w-full" type="text" placeholder="Type somthing..." />
                        <img src="\img\Telegram App.png"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Chat;