import "./bt1.scoped.css"
function Bt1(props){
    let {children, Width, classname,onChange} = props
    return(
        <button onChange={onChange} style={{width:Width??'100px'}} className={classname}>{children}</button>
    )
}
export default Bt1;