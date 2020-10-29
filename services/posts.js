const URL = 'https://s29144.p1088.sites.pressdns.com/wp-json/wp/v2'

const getPosts = async () => {
  const items = await fetch(`${URL}/posts-recently`)
  const response = await items.json()
  return response
}

const getPostBySlug = async (slug) => {
  const item = await fetch(`${URL}/get-single-post?slug=${slug}`)
  const response = await item.json()
  return response?.[0] || {}
}

export { getPosts, getPostBySlug }
