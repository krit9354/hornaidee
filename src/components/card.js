import "./card.scoped.css"
function Card(props){
    const {url,dorm_name,price,distance} = props
    return(
        <div className="card">
            <img src={url}/>
            <div className="info">
                <h6 className="Dorm_name">{dorm_name}</h6>
                <p className="price_info">{price}บาท/เดือน</p>
                <p className="Distance">ระยะห่างจากมอ:{distance}ม.</p>
            </div>
        </div>
    )
}

export default Card