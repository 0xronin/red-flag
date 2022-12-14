import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RedFlag</title>
        <meta name="description" content="Scam Websites on the internet" />
        <link rel="icon" href="/redflag.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>RedFlag</a>
        </h1>

        <p className={styles.description}>
          🚩 Flagging Scam Websites and Accounts{" "}
          <code className={styles.code}>on the internet</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://dk3.in/"
            rel="noopener noreferrer"
            className={styles.card}
            target="_blank"
          >
            <h2>dk3 &rarr;</h2>
            <p>
              This Fake Shopping website has fake listing and scams users via
              online payment
            </p>
          </a>

          <a
            href="https://crazylady.in/"
            rel="noopener noreferrer"
            className={styles.card}
            target="_blank"
          >
            <h2>crazylady &rarr;</h2>
            <p>
              Another Fake Wordpress website selling phones worth 100000 for
              2500.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/0xZKP"
          target="_blank"
          rel="noopener noreferrer"
        >
          Setup by 0xRonin | Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
