import "../styles/globals.css";
import FooterLanding from "../components/FooterLanding";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-zinc-800 min-h-screen flex flex-col justify-between md:w-full">
      <div className="min-h-[calc(100vh-84px)]">
        <Component {...pageProps} />
      </div>
      <FooterLanding />
    </div>
  );
}

export default MyApp;
