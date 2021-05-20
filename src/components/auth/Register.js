import './../../css/login.css';

function Register() {
  return (
    <div className="form-container">
      <h1>
        Account <span>Register</span>
      </h1>
      <form>
        <div className="form-group">
          <label> Name : </label>
          <input type="text" placeholder="Email" />
        </div>

        <div className="form-group">
          <label> Email : </label>
          <input type="email" placeholder="Password" />
        </div>
        <div className="form-group">
          <label> Password : </label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <label> Confirm Password : </label>
          <input type="password" placeholder="Password" />
        </div>

        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
