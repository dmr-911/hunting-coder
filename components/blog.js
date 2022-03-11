import React from 'react';
import Link from 'next/link';
import styles from '../styles/Blog.module.css';

const Blog = ({blog}) => {
    const {title, content, slug} = blog;
    return (
        <Link href={`/blogspot/${slug}`}>
        <div className={`${styles.blogContainer}`}>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
        </Link>
    );
};

export default Blog;