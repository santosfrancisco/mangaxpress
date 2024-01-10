// import { getFirestore, setDoc, doc } from "firebase/firestore";
import Head from "next/head";
// import Link from "next/link";
import { useEffect } from "react";
import { useUser } from "../context/userContext";
import { useDatabase } from "../context/databaseContext";

export default function Home() {
  // Our custom hook to get context values
  // const { loadingUser, user } = useUser();
  const { database, isLoading } = useDatabase();

  // const profile = { username: "nextjs_user", message: "Awesome!!" };

  // useEffect(() => {
  //   if (!loadingUser) {
  //     // You know that the user is loaded: either logged in or out!
  //     console.log({ user });
  //   }
  //   // You also have your firebase app initialized
  // }, [loadingUser, user]);

  // useEffect(() => {
  //   if (!isLoading) {
  //     console.log({ database });
  //   }
  // }, [isLoading, database]);

  // const createUser = async () => {
  //   const db = getFirestore();
  //   await setDoc(doc(db, "profile", profile.username), profile);

  //   alert("User created!!");
  // };

  return (
    <div className="container">
      <Head>
        <title>Manga Xpress App</title>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon-16x16.png`}
        />
        <link
          rel="manifest"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/site.webmanifest`}
        />
        <link
          rel="mask-icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="Manga Xpress App" />
        <meta
          property="og:description"
          content="Seus mangás preferidos na palma da mão."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/shared.png`}
        />

        {/* <!-- Twitter --/> */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>
        <h1 className="title">Manga Xpress App</h1>
        <p className="description">
          Seus mangás preferidos na palma da sua mão!
        </p>
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/manga-xpress-logo.png`}
          alt="Logo Mangá Xpress"
          width={240}
        />
      </main>
      <footer>
        <a href={database?.latest?.link} download>
          {isLoading || !database
            ? "carregando..."
            : `Baixar a versão ${database?.latest?.version} para Android`}
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #091013;
        }

        main {
          /* padding: 2rem 0; */
          /* flex: 1; */
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: #eaeaea;
          font-size: 1.5em;
        }

        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          color: #eaeaea !important;
          font-size: 1.5em;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        button {
          font-size: 1.5em;
          margin: 1em 0;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
          color: #fff;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
