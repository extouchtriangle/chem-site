import { glob, file } from 'astro/loaders'
import { defineCollection } from 'astro:content'

import { feedLoader } from '@ascorbic/feed-loader'
import { githubReleasesLoader } from 'astro-loader-github-releases'
import { githubPrsLoader } from 'astro-loader-github-prs'
import { blueskyPostsLoader } from 'astro-loader-bluesky-posts'

import {
  pageSchema,
  postSchema,
  projectSchema,
  streamSchema,
  photoSchema,
} from '~/schema'

const home = defineCollection({
  loader: glob({ base: './src/content/home', pattern: 'index.{md,mdx}' }),
})

const csrnotes = defineCollection({
  loader: glob({
    base: './src/content/csrnotes',
    pattern: '**/[^_]*.{md,mdx}',
  }),
  schema: postSchema,
})
const feeds = defineCollection({
  loader: feedLoader({
    url: 'https://astro.build/rss.xml',
  }),
})
export const collections = {
  home,
  csrnotes,
}
