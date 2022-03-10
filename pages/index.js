import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import InputContainer from '../components/InputContainer'

export default function Home() {
  return (
    <body>
      <Head>
        <title>Your money safe in our pockets!</title>
      </Head>
      <Header />
      <InputContainer />

      <footer>
        Footer
      </footer>
    </body>
  )
}
