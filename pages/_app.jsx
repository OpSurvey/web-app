import "../styles/globals.css";
import FooterLanding from "../components/FooterLanding";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OpSurvey</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="title"
        />
      </Head>
      <div className="bg-zinc-800 min-h-screen flex flex-col justify-between md:w-full">
        <ToastContainer theme="dark" />
        <div className="min-h-[calc(100vh-60px)]">
          <Component {...pageProps} />
        </div>
        <FooterLanding />
      </div>
    </>
  );
}

export default MyApp;
