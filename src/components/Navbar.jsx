import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='nav'>
    <Link href={"/HomePage"}>
        HomePage
    </Link>
     <Link href={"/CreatePostPage"}>
        CreatePost
    </Link>
     <Link href={"/SignUp"}>
        Signup
    </Link>
    </div>
  )
}

export default Navbar;