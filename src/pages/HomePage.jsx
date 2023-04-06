import Navbar from '@/components/Navbar';
import React from 'react'

export async function getServerSideProps() {
    // Fetch data from an API endpoint
    const res = await fetch('https://my-blog-app-6frs.vercel.app/posts');
    const data = await res.json();
  
    // Pass data as props to the page component
    return {
      props: {
        data,
      },
    };
  }





const HomePage = ({data}) => {
console.log("ram",data);
  
  return (

   <>
   <Navbar/>
   <div className='main'>
     {data.length>0&&data.map((el)=> (
       <div key={el.id}>
       <h1>{el.title}</h1>
       <h2>{el.id}</h2>

       </div>
     ))}
   </div>
   </>
  )
}

export default HomePage;

