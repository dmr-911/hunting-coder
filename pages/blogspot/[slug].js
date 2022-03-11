import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const BlogId = () => {
    const router = useRouter();
    const [blog, setBlog] = useState({});
    const{slug} = router.query;
    useEffect(()=>{
        if(router.isReady){
            fetch(`http://localhost:3000/api/blog?slug=${slug}`)
            .then(res => res.json())
            .then(data => setBlog(data)) 
        }
    },[router.isReady])
    return (
        <div className="text-center">
            <h4>{blog.title}</h4>
            <p>{blog.content}</p>
        </div>
    );
};

export default BlogId;