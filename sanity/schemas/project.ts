import { defineArrayMember, defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Trabajos realizados',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Localidad',
      type: 'string',
      validation: (rule) => rule.max(80),
    }),
    defineField({
      name: 'description',
      title: 'Descripción corta',
      type: 'text',
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: 'longDescription',
      title: 'Descripción del proyecto',
      type: 'text',
      description:
        'Texto opcional para la página del proyecto. Puedes separar párrafos con saltos de línea.',
      validation: (rule) => rule.max(1200),
    }),
    defineField({
      name: 'coverImage',
      title: 'Imagen principal',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Galería',
      type: 'array' as const,
      of: [defineArrayMember({ type: 'image', options: { hotspot: true } })],
      validation: (rule) => rule.max(12),
    }),
    defineField({
      name: 'featured',
      title: 'Destacar en la página principal',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'coverImage',
    },
  },
})
