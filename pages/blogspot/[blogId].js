import { useRouter } from 'next/router';
import React from 'react';

const BlogId = () => {
    const router = useRouter();
    const{blogId} = router.query;
    console.log(blogId);
    return (
        <div>
            <h4>This is {blogId} blog</h4>
        </div>
    );
};

export default BlogId;