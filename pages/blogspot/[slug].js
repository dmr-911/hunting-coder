import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const BlogId = ({data}) => {
    
    const [blog, setBlog] = useState(data);
    return (
        <div className="text-center">
            <h4>{blog.title}</h4>
            <p>{blog.content}</p>
        </div>
    );
};

export default BlogId;

export async function getServerSideProps(context) {
    const {slug} = context.query;
    const res = await fetch(`http://localhost:3000/api/blog?slug=${slug}`);
    const data = await res.json();
    return {
      props: {data}, // will be passed to the page component as props
    }
}