import "./filter.scoped.css"

function Filter(props){
    const {section, onclick} = props
    return(
        <div className="filter">
            <div>
                <h5 className="section">{section}</h5>
                <img className="plus" src="/img/Vector.png" onClick={onclick}></img>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Filter;