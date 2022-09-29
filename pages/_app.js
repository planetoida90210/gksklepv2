import '../styles/globals.css';
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import { Header } from '../components';

const MyApp = ({ Component, pageProps }) => {
  return (
  <ThemeProvider attribute="class">
    <div className="dark:bg-gk-dark bg-white min-h-screen">
      <Header />
      <Component {...pageProps} />
    </div>
    <Script src="https://kit.fontawesome.com/99c5f6502c.js" crossOrigin="anonymous" />
  </ThemeProvider>
  )
}

export default MyApp
