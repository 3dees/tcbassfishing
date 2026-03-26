import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
  projectId: 'aatin0zb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export function hasAsset(image: any): boolean {
  return !!(image?.asset?._ref || image?.asset?._id);
}

// Types
export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body: any[];
  mainImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  categories?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

// Queries
export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage { ..., asset-> },
  categories
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  body,
  mainImage { ..., asset-> },
  categories,
  seoTitle,
  seoDescription
}`;
