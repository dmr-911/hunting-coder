import {useRouter} from 'next/router';
import React from 'react';

const Post = ({post}) => {
    // For fallback is true 
    const router = useRouter();
    if(router.isFallback){
        return <h3>Loading...</h3>
    }

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
        // fallback : false
        fallback : true
        // fallback : 'blocking'
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await res.json();

    if(!data.id){
        return {
            notFound : true
        }
    }

    console.log(`Generating page for /posts/${params.postId}`);
    return {
        props : {
            post : data
        }
    }
}