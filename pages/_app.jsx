import '../styles/globals.css'
import FooterLanding from '../components/FooterLanding'

function MyApp({ Component, pageProps }) {
  return (
  <div className='bg-zinc-800 min-h-screen flex flex-col justify-between md:w-full'>
    <Component {...pageProps} />
    <FooterLanding/>
  </div>
  )
}

export default MyApp
