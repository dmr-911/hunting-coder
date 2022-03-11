import { useRouter } from 'next/router';
import React from 'react';

const BlogId = () => {
    const router = useRouter();
    const{slug} = router.query;
    return (
        <div>
            <h4>This is {slug} blog</h4>
        </div>
    );
};

export default BlogId;