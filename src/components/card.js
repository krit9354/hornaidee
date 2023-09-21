import "./card.scoped.css"
function Card(props){
    const {dorm} = props
    return(
        <div className="card">
            <div className="image"><img src={dorm.url}/></div>
            <div className="info">
                <h6 className="Dorm_name">{dorm.dorm_name}</h6>
                <p className="price_info">{dorm.price} บาท/เดือน</p>
                <p className="Distance">ระยะห่างจากมอ:{dorm.distance} ม.</p>
            </div>
        </div>
    )
}

export default Card