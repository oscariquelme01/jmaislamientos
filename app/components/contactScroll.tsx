'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function ContactScroll() {
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get('contacto') !== 'true') return

    document.getElementById('contactFormHeader')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [searchParams])

  return null
}
