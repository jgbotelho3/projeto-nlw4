import Head from "next/head";
import { ChallengeProvider } from "../context/ChallengesContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Move it</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
