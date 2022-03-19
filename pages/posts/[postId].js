import React from 'react';

const Post = ({post}) => {
    console.log(post);
    return (
        <div>
            <h3>post no. {post.id}</h3>
            <h3>{post.title}</h3>
        </div>
    );
};

export default Post;

export async function getStaticPaths(){
    return {
        paths : [
            {
                params : {postId : '1'},
                params : {postId : '2'},
                params : {postId : '3'}
            },
        ],
        fallback : false
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await res.json();

    return {
        props : {
            post : data
        }
    }
}