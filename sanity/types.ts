export type SanityImage = {
  asset?: {
    url?: string
    metadata?: {
      dimensions?: {
        width: number
        height: number
        aspectRatio: number
      }
    }
  }
}

export type Project = {
  _id: string
  title: string
  slug: string
  location?: string
  description: string
  longDescription?: string
  coverImage?: SanityImage
  gallery?: SanityImage[]
}
