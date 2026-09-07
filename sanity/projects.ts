import { sanityClient } from './client'
import {
  projectBySlugQuery,
  projectSlugsQuery,
  projectsQuery,
} from './queries'
import type { Project } from './types'

export async function getProjects() {
  try {
    return await sanityClient.fetch<Project[]>(projectsQuery)
  } catch (error) {
    console.error('Failed to fetch Sanity projects:', error)
    return []
  }
}

export async function getProjectBySlug(slug: string) {
  try {
    return await sanityClient.fetch<Project | null>(projectBySlugQuery, { slug })
  } catch (error) {
    console.error(`Failed to fetch Sanity project "${slug}":`, error)
    return null
  }
}

export async function getProjectSlugs() {
  try {
    return await sanityClient.fetch<{ slug: string }[]>(projectSlugsQuery)
  } catch (error) {
    console.error('Failed to fetch Sanity project slugs:', error)
    return []
  }
}
