import React from 'react'

const Comment = () => {
  return (
    <div>Comment</div>
  )
}

export default Comment;

export async function getStaticPaths() {
    return {
        paths: [
            { params: { commentId : '1' }},
            { params: { commentId : '2' }},
            { params: { commentId : '3' }},
            { params: { commentId : '4' }},
        ],
        fallback: false
    };
};

export async function getStaticProps(context) {
    const {params} = context;
    const {commentId} = params;

    const comment = comments.find(comment => comment.id === parseInt(commentId));
    return {
        props: {
            comment
        }
    };
}