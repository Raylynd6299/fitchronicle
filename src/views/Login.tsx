const Login = () => {
  return (
    <div className="custom-container">
      <input type="checkbox" id="custom-signup_toggle" />
      <form className="custom-form">
          <div className="custom-form_front">
              <div className="custom-form_details">Login</div>
              <input placeholder="Username" className="custom-input" type="text"/>
              <input placeholder="Password" className="custom-input" type="text"/>
              <button className="custom-btn">Login</button>
              <span className="custom-switch">Don't have an account? 
                  <label className="custom-signup_tog" htmlFor="custom-signup_toggle">Sign Up</label>
              </span>
          </div>
          <div className="custom-form_back">
              <div className="custom-form_details">SignUp</div>
              <input placeholder="Firstname" className="custom-input" type="text"/>
              <input placeholder="Username" className="custom-input" type="text"/>
              <input placeholder="Password" className="custom-input" type="text"/>
              <input placeholder="Confirm Password" className="custom-input" type="text"/>
              <button className="custom-btn">Signup</button>
              <span className="custom-switch">Already have an account? 
                  <label className="custom-signup_tog" htmlFor="custom-signup_toggle">Sign In</label>
              </span>
          </div>
      </form>
    </div>
  )
}

export default Login
