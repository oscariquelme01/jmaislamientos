import type { MetadataRoute } from 'next';

import { getProjectSlugs } from '@/sanity/projects';

const siteUrl = 'https://www.jmaislamientosyrevestimientos.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjectSlugs();

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${siteUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${siteUrl}/proyectos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/proyectos/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
