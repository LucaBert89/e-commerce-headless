import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import graphql from '../lib/graphql';
import getAllProducts from "../lib/graphql/getAllProducts";
import { GetStaticProps } from 'next';
import {NextPage} from "next"

export const getStaticProps: GetStaticProps = async () => {
  const { products } = await graphql.request(getAllProducts)
    return {
      revalidate: 60,
      props: {
      products,
    },
  };
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
       
      </Head>

      <main className={styles.main}>
       
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
