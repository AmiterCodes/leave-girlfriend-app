import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Leave your Girlfriend App
        </h1>

        <p className={styles.description}>
          Get started by creating a link  
        </p>

        <div className={styles.grid}>
          <Link href="create" className={styles.card}>
            <a className={styles.card}>
            <h3>Create Link &rarr;</h3>
            <p>create a link to dump your girlfriend</p>
            </a>
          </Link>

          <Link href="surprise?name=דפנה&password=12345" className={styles.card}>
            <a className={styles.card}>
            <h3>View example &rarr;</h3>
            <p>Learn about the app by viewing an example! (password is 12345)</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
