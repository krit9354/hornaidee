import "./filter.scoped.css"

function Filter(props){
    const {section} = props
    return(
        <div className="filter">
            <h5 className="section">{section}</h5>
            <img className="plus" src="/img/Vector.png"></img>
        </div>
    )
}

export default Filter; 