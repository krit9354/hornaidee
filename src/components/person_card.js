
function PersonCard(props){
    const {name} = props
    return(
        <div className=" h-28  items-center flex p-2 hover:bg-gray border-b border-gray border-solid">
            <img src="/img/Male User.png" className=" h-20 m-4"/>
            <div className="info">
                <h6 className="name text-old_green font-medium font text-2xl">{name}</h6>
                {/* <p className="last_message">you : {message}</p> */}
            </div>
        </div>
    )
}

export default PersonCard;