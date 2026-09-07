import Image from 'next/image'

import { urlForImage } from '@/sanity/image'
import type { SanityImage } from '@/sanity/types'

type ProjectImageProps = {
  image?: SanityImage
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
}

export default function ProjectImage({
  image,
  alt,
  className = '',
  sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  priority = false,
}: ProjectImageProps) {
  const dimensions = image?.asset?.metadata?.dimensions

  if (!image || !dimensions) return null

  let src = image.asset?.url || ''

  if (!src) {
    try {
      src = urlForImage(image).width(1400).quality(82).url()
    } catch {
      return null
    }
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  )
}
