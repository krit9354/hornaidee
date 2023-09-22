import "./bt2.scoped.css"
function Bt2(props){
    let {children, Width ,classname} = props
    console.log("width = ",Width)
    return(
        <button style={{width:Width??'100px'}} className={classname}>{children}</button>
    )
}
export default Bt2;