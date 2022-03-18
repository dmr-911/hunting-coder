import React from 'react';
import User from '../components/user';

const UserList = ({users}) => {
    return (
        <>
            <h2>List of users</h2>
            {
                users.map((user)=><User key={user.id} user={user}/>)
            }
        </>
    );
};

export default UserList;

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props : {
            users : data
        }
    }
};