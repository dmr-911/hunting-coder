import React from 'react';
import styles from '../styles/Home.module.css'

const Blog = () => {
  return (
    <>
    <div className="text-center text-3xl font-medium my-4">Blogs</div>
    <main className={styles.main}>
    <div>
    <h3>Learning next js in 2022</h3>
    <p>Js is the language of web ui, learn it better!</p>
  </div>
  <div>
    <h3>Learning next js in 2022</h3>
    <p>Js is the language of web ui, learn it better!</p>
  </div>
  <div>
    <h3>Learning next js in 2022</h3>
    <p>Js is the language of web ui, learn it better!</p>
  </div>
    </main>
  </>
  )
}

export default Blog;