import './register.scoped.css';
function Register() {
  return (
    <body >
      <div className='background' >
        <div className='register_box'>
        <h1 className='hornaid'>หอไหนD?</h1>
        <div className='rang'>
           <h6 className='username'>username</h6>
          <input type='text' className='input'></input>
        </div>
          <div className='rang'>
            <h6 className='password'>password</h6>
          <input type='password' className='input'></input><br/>
        </div>
        <div className='rang'>
            <h6 className='password'>confirmpassword</h6>
          <input type='password' className='input'></input><br/>
        </div>
          <button className='login_bt'>login</button>
      </div>
        <div className='dha'>
          <div className='flex'>
            <p>did you already have acount ?</p>
            <i className='rgt_bt'>register</i>
          </div>
        </div>
      </div>
    </body>
  );
}
export default Register;
