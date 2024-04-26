import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Script from 'next/script';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      <Header />
      <div className="content overflow-x-hidden"><Component {...pageProps} /></div>
      <Footer />
    </>
  )
}

export default MyApp
