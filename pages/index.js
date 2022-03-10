import Head from 'next/head'
import Header from '../components/Header'
import InputContainer from '../components/InputContainer'
import TotalContainer from '../components/TotalContainer'

export default function Home() {
  return (
    <body>
      <Head>
        <title>Your money safe in our pockets!</title>
      </Head>
      <Header />
      <InputContainer />
      <TotalContainer />
    </body>
  )
}
