import React from 'react';
import Blogs from '../components/blogs';

const Blog = ({data}) => {
  return (
    <>
    <Blogs data={data}></Blogs>
  </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/blogs");
  const data = await res.json();
  return {
    props: {data}
  }
}


export default Blog;