import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'

export default function Home() {
  return (
    <>
         <Head>
            <title>HomePage</title>
            <meta name="keywords" content="recipes"/>
        </Head>
  
    <div >
<h1 className={styles.title}>Homepage</h1>
<p className={styles.text} >lorem lorem rlor lorem lorem rlo lorme lorem </p>
<p className={styles.text}>lorem lorem rlor lorem lorem rlo lorme lorem </p>
<Link href="/recipes/recipes"><a className={styles.btn} >SEE RECIPES</a></Link>
    </div>
    </>
  )
}
