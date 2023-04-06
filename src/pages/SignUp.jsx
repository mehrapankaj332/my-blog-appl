import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react';

const Signup = () => {

  const router = useRouter();
  const [ formData, setForm ] = useState({
    firstName : '',
    lastName:"ram",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { id, value } = e.target;

    setForm({
      ...formData,
      [ id ]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.firstName === "" || formData.email === "" || formData.password === ""){
      return
    }

    const {data} = await axios.post("https://my-blog-app-6frs.vercel.app/users", formData)
    console.log(data)
    
    if (data.status === "ok") {
      alert("Register Successfully");
      router.push('/account#')
    } 
    else {
      alert("email should be unique");
    }
  }

  return (
    <>
    <Navbar/>
    <div className="form-box">
    <form className="form">
    <span className="title">Signup</span>
    <span className="subtitle">Create a free account with your email.</span>
    <div className="form-container">
      <input type="text" className="input" onChange={ handleInput } placeholder="Full Name"/>
			<input type="email" className="input" onChange={ handleInput } placeholder="Email"/>
			<input type="password" className="input" onChange={ handleInput } placeholder="Password"/>
    </div>
    <button onClick={handleSubmit}>Signup</button>
    </form>
    <div className="form-section">
    <p>Have an account? <a href={"/LoginPage"}>Log in</a> </p>
    </div>
    </div>
    </>
  )
}

export default Signup;
