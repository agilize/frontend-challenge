import '../styles/globals.scss'
import SalaryWrapper from '../contexts/SalaryWrapper';

function MyApp({ Component, pageProps }) {
  return (
  <SalaryWrapper>
    <Component {...pageProps} />
  </SalaryWrapper>
  )
}

export default MyApp
