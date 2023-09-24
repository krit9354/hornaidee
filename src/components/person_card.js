
function PersonCard(){
    return(
        <div className=" h-28  items-center flex p-2 hover:bg-gray-100">
            <img src="/img/Male User.png" className=" h-20 m-4"/>
            <div className="info">
                <h6 className="name text-old_green font-medium font text-2xl">Ulike apartment</h6>
                <p className="last_message">you : hello</p>
            </div>
        </div>
    )
}

export default PersonCard;