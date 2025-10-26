import React, { useState } from 'react';

const Register = () => {
  
    // Registration logic to be implemented here
  return (
    <div className="login-parent">
      <div className="login-child">
        <h2>Register</h2>
        <form className="login-form">
          <input placeholder="Name" />
          <input placeholder="Password" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;