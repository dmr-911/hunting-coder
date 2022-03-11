import React, { useState } from 'react';
import Blog from './blog';

const Blogs = ({data}) => {
    const [blogs, setBlogs] = useState(data);
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