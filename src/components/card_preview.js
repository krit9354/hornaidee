import Bt1 from "./bt1"
import "./card_preview.scoped.css"
function Card_previwe(props){
    const {dorm} = props
    return(
        <div className="card_preview">
            <div className="image_preview relative">
                <img clas src={dorm.url}/>
                <div className="absolute right-0 bottom-0"><Bt1>แก้ไข</Bt1></div>
            </div>
            <div className="info">
                <h6 className="Dorm_name">{dorm.dorm_name}</h6>
                <p className="price_info">{dorm.price} บาท/เดือน</p>
                <p className="Distance">ระยะห่างจากมอ:{dorm.distance} ม.</p>
            </div>
        </div>
    )
}

export default Card_previwe