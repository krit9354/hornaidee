import "./bt1.scoped.css"
function Bt1(props){
    let {children, Width, classname} = props
    console.log("width = ",Width)
    return(
        <button style={{width:Width??'100px'}} className={classname}>{children}</button>
    )
}
export default Bt1;