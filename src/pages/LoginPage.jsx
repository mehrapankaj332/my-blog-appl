import Navbar from '@/components/Navbar';
import React from 'react';

const LoginPage = () => {
  return (
    <>
    <Navbar/>
    <div className="form-box">
    <form className="form">
    <span className="title">Login</span>
    <div className="form-container">
			<input type="email" className="input" placeholder="Email"/>
			<input type="password" className="input" placeholder="Password"/>
    </div>
    <button>Login</button>
    </form>
    <div className="form-section">
    </div>
    </div>
    </>
  )
}

export default LoginPage;