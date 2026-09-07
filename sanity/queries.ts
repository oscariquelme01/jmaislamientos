const imageFields = `{
  ...,
  asset->{
    _id,
    url,
    metadata {dimensions}
  }
}`

export const featuredProjectsQuery = `*[_type == "project" && featured == true && coverImage.asset._ref match "image-*"] | order(publishedAt desc)[0...6] {
  _id,
  title,
  "slug": slug.current,
  location,
  description,
  coverImage ${imageFields}
}`

export const projectsQuery = `*[_type == "project" && coverImage.asset._ref match "image-*"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  location,
  description,
  coverImage ${imageFields}
}`

export const projectSlugsQuery = `*[_type == "project" && defined(slug.current) && coverImage.asset._ref match "image-*"] {
  "slug": slug.current
}`

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug && coverImage.asset._ref match "image-*"][0] {
  _id,
  title,
  "slug": slug.current,
  location,
  description,
  longDescription,
  coverImage ${imageFields},
  gallery[asset._ref match "image-*"] ${imageFields}
}`
