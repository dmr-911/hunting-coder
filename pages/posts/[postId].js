import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <h3>post no. {post.id}</h3>
            <h3>{post.title}</h3>
            <hr  className="mb-4"/>
        </div>
    );
};

export default Post;

export async function getStaticPaths(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map(post =>{
        return {
            params : {postId : `${post.id}`}
        }
    });

    return {
        // paths : [
        //     {
        //         params : {postId : '3'}
        //     }
        // ],
        paths,
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