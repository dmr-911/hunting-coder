import React, { useState } from 'react';

const CommentsContainer = () => {
    const [comments = [], setComments] = useState([]);
    const [comment, setComment] = useState('');
    const fetchComments = async() =>{
        const res = await fetch('/api/comments');
        const data = await res.json();
        setComments(data);
    };

    const submitComment = async() =>{
        const res = await fetch('/api/comments', {
            method : 'POST',
            body : JSON.stringify({comment}),
            headers : {
                'Content-Type' : 'application/json'
            }
        });
        const data = await res.json();
        fetchComments()
    };

    const handleDelete = async (id) =>{
        const res = await fetch(`/api/comments/${id}`, {
            method : 'DELETE'
        });
        const data = await res.json();
        console.log(data);
        fetchComments()
    }
    return (
        <div>
            <input type="text" value={comment} onChange={e => setComment(e.target.value)}/> <button onClick={submitComment}>Submit comment</button>
            <br /><button onClick={fetchComments}>Load comments</button>
            <h1>{comments?.length}</h1>
            {
                comments?.map(com => <h3 key={com.id} className="cursor-pointer" onClick={()=>handleDelete(com.id)}>{com.id} | {com.text}</h3>)
            }
        </div>
    );
};

export default CommentsContainer;

