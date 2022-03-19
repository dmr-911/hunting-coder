import React from 'react';
import styles from '../styles/Navigation.module.css';
import Link from 'next/link';

const Navigation = () => {
    return (
        <>
            <nav className={styles.mainNav}>
            <ul>
            <li><Link href="/" scroll={false}>Home</Link></li>
            <li><Link href="/news" scroll={false}>News</Link></li>
            <li><Link href="/blog" scroll={false}>Blog</Link></li>
            <li><Link href="/users" scroll={false}>Users</Link></li> 
            <li><Link href="/shop" scroll={false}>Shop</Link></li> 
            <li><Link href="/posts" scroll={false}>Posts</Link></li> 
            <li><Link href="/products" scroll={false}>Products</Link></li> 
            <li><Link href="/events" scroll={false}>Events</Link></li> 
            <li><Link href="/dashboard-swr" scroll={false}>Dashboard</Link></li> 
            </ul>
        </nav>
        </>
    );
};

export default Navigation;