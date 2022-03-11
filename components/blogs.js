import React, { useEffect, useState } from 'react';
import Blog from './blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/api/blogs')
        .then(res => res.json())
        .then( data => setBlogs(data))
    },[]);

    return (
        <div>
            {
                blogs.map((blog, i)=><Blog
                key={i}
                blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;