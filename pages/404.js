import { Head } from 'next/head'
import { ContentCenter, Title } from '../styles/global'

const Error = () => {
  return (
    <>
      <Head>
        <title>Error 404 | Exponencial</title>
      </Head>
      <ContentCenter>
        <Title>404</Title>
      </ContentCenter>
    </>
  )
}

export default Error
