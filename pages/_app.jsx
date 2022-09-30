import "../styles/globals.css";
import FooterLanding from "../components/FooterLanding";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-zinc-800 min-h-screen flex flex-col justify-between md:w-full">
      <ToastContainer theme="dark" />
      <div className="min-h-[calc(100vh-60px)]">
        <Component {...pageProps} />
      </div>
      <FooterLanding />
    </div>
  );
}

export default MyApp;
