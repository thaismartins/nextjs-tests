const URL = 'https://s29144.p1088.sites.pressdns.com/wp-json/wp/v2'

const getCategories = async () => {
  const items = await fetch(`${URL}/categories`)
  const response = await items.json()
  return response
}

const getCategoryBySlug = async (slug) => {
  const item = await fetch(`${URL}/categories?slug=${slug}`)
  const response = await item.json()
  return response?.[0] || {}
}

export { getCategories, getCategoryBySlug }
