import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

const postSchema = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Fishing Report', value: 'Fishing Report' },
          { title: 'Tips & Techniques', value: 'Tips & Techniques' },
          { title: 'Seasonal Update', value: 'Seasonal Update' },
          { title: 'Gear & Tackle', value: 'Gear & Tackle' },
          { title: 'Grand Traverse Bay', value: 'Grand Traverse Bay' },
          { title: 'Trip Prep', value: 'Trip Prep' },
        ],
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
        },
      ],
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
    },
  ],
};

export default defineConfig({
  basePath: '/studio',
  projectId: 'aatin0zb',
  dataset: 'production',
  title: 'TC Bass Fishing',
  schema: {
    types: [postSchema],
  },
  plugins: [
    structureTool(),
  ],
});
