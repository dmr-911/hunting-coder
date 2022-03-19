import React from 'react';
import Link from 'next/link';

const PostList = ({posts}) => {
    return (
        <div>
            <h1>List of posts</h1>
            {
                posts.map(post => <div key={post.id}>
                    <Link href={`posts/${post.id}`} passHref><h3 className="cursor-pointer">{post.id} {post.title}</h3></Link>
                    <hr  className="mb-4"/>
                </div>)
            }
        </div>
    );
};

export default PostList;

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props :{
            posts : data
        }
    }
}