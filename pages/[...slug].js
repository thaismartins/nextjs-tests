import { Head } from 'next/head'
import {
  getPostBySlug,
  getCategoryBySlug,
  getCategories,
  getPosts,
} from '../services'
import { ContentCenter, Title } from '../styles/global'

const Post = ({ post, category }) => {
  return post?.post_title ? (
    <>
      <ContentCenter>
        <Title>Post | {post.post_title}</Title>
        <div dangerouslySetInnerHTML={{ __html: post.post_content }} />
      </ContentCenter>
    </>
  ) : (
    <>
      <ContentCenter>
        <Title>Category | {category?.name}</Title>
      </ContentCenter>
    </>
  )
}

export async function getStaticProps({ params }) {
  const slug =
    params?.slug.hasOwnProperty('isArray') && params?.slug.isArray()
      ? params?.slug.pop()
      : params?.slug
  console.log('slug', slug)
  const post = await getPostBySlug(slug)
  console.log('post', post)
  const category = await getCategoryBySlug(slug)

  return {
    props: {
      post,
      category,
    },
    invalidate: 2000,
  }
}

export async function getStaticPaths() {
  const categories = await getCategories()
  const categoriesPaths = categories.map((item) => ({
    params: { slug: [item.slug] },
  }))

  const posts = await getPosts()
  const postsPaths = posts.map((item) => ({
    params: { slug: [item.post_name] },
  }))

  return {
    paths: [...postsPaths, ...categoriesPaths],
    fallback: 'blocking',
  }
}

export default Post
