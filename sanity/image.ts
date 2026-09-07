import { createImageUrlBuilder } from '@sanity/image-url'

import { sanityClient } from './client'

const builder = createImageUrlBuilder(sanityClient)

export const urlForImage = (source: Parameters<typeof builder.image>[0]) =>
  builder.image(source)
