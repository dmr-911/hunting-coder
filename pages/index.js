import Head from 'next/head'
import Image from 'next/image'
import BannerImg from '../components/bannerImg'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Home({data}) {
  const [state, setState] = useState(data);
  return (
    <div className={styles.container}>
      <style jsx>
        {
          `
          .home-title{
            color : red
          }
          h3{
            font-size : 28px
          }
          `
        }
      </style>
      <main className={styles.main}>
        <h1 className="text-4xl font-bold pt-8 home-title">
         Hunting coder
        </h1>

        <p className="text-2xl font-bold py-8">
        A blog for coders by a coder
        </p>
        <BannerImg></BannerImg>
        <div className="cursor-pointer">
          <Link href="/blogspot/learnNext">
          <h3>Learning next js in 2022</h3>
          </Link>
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

      <footer className={styles.footer}>
      </footer>
    </div>
  )
};

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/blogs");
  const data = await res.json();
  return {
    props: {data}, // will be passed to the page component as props
  }
}
