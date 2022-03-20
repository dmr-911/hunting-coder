import React, { useState } from 'react';

const CommentsContainer = () => {
    const [comments = [], setComments] = useState([]);
    const fetchComments = async() =>{
        const res = await fetch('/api/comments');
        const data = await res.json();
        setComments(data)
    };
    return (
        <div>
            <button onClick={fetchComments}>Load comments</button>
            <h1>{comments?.length}</h1>
            {
                comments?.map(com => <h3 key={com.id}>{com.id} | {com.text}</h3>)
            }
        </div>
    );
};

export default CommentsContainer;

