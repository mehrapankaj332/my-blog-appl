import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import axios from 'axios';

const CreatePostPage = () => {
  const [title, setTitle]=useState("");
  const [desc, setDesc] = useState("");
 


  
  

  const handleSubmit =(e)=>{
    e.preventDefault()
   let obj={title:title,desc:desc};
    
   //console.log(title,desc)
   console.log(obj);
     postData(obj);
  }


  
  const postData= async(data)=>{
    const res =   await axios.post("https://my-blog-app-6frs.vercel.app/posts",data)      
    console.log("res" ,res.data)     
  }


  return (
  <>
  <Navbar/>
  <div className="card">
  <div className="card-header">
    <div className="text-header">Create New Post</div>
  </div>
  <div className="card-body">
    <form action="#" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input required="" className="form-control"  id="title" type="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Description</label>
        <input required="" className="form-control"  id="description" type="description" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
      </div>
      <input type="submit" className="btn" value="submit"/>    
    </form>
  </div>
  </div>

  </>
  )
}

export default CreatePostPage;



