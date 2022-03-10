import '../styles/globals.scss'
import SalaryProvider from '../contexts/SalaryContext';

function MyApp({ Component, pageProps }) {
  return (
  <SalaryProvider>
    <Component {...pageProps} />
  </SalaryProvider>
  )
}

export default MyApp
