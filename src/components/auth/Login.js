import './../../css/login.css';

function Login() {
  return (
    <div className="form-container">
      <h1>
        Account <span>Login</span>
      </h1>
      <form>
        <div className="form-group">
          <label> Email : </label>
          <input type="email" placeholder="Email" />
        </div>

        <div className="form-group">
          <label> Password : </label>
          <input type="password" placeholder="Password" />
        </div>

        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
