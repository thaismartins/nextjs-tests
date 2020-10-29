import { Head } from 'next/head'
import Link from 'next/link'
import { ContentCenter, Title, Subtitle } from '../styles/global'
import { getCategories, getPosts } from '../services'

const Home = ({ posts, categories }) => {
  return (
    <>
      {/* <Head>
        <title>Home | Exponencial</title>
      </Head> */}
      <ContentCenter>
        <Title>Home</Title>
        <Subtitle>Posts</Subtitle>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index} style={{ padding: '10px' }}>
                <Link href={`/${post.post_name}`}>{post.post_title}</Link>
              </li>
            )
          })}
        </ul>
        <Subtitle>Categories</Subtitle>
        <ul>
          {categories.map((category, index) => {
            return (
              <li key={index} style={{ padding: '10px' }}>
                <Link href={`/${category.slug}`}>{category.name}</Link>
              </li>
            )
          })}
        </ul>
      </ContentCenter>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()
  const categories = await getCategories()

  return {
    props: {
      posts,
      categories,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: '/' } }],
    fallback: true,
  }
}

export default Home
