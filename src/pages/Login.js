import './Login.scoped.css';
function Login() {
  return (
    <body>
      <div className='container'>
        <div className='login_page'>
          <h1 className='hornaid'>หอไหนD?</h1>
          <h6 className='username'>username</h6>
          <input type='text' className='input'></input>
          <h6 className='password'>password</h6>
          <input type='password' className='input'></input><br/>
          <button className='login_bt'>login</button>
        </div>

        <div className='dha'>
          <div className='flex'>
            <p>don’t have acount ?</p>
            <i className='rgt_bt'>register</i>
          </div>
        </div>
      </div>

    </body>
  );
}
export default Login;
