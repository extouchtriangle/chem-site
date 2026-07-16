import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  website: 'https://astro-antfustyle-theme.vercel.app/',
  base: '/',
  title: 'Astro AntfuStyle Theme',
  description:
    'A customizable, feature-rich Astro theme for blog and portfolio creation',
  author: 'extouchtriangle',
  lang: 'en',
  ogLocale: 'en_US',
  imageDomains: ['cdn.bsky.app', 'images.unsplash.com'],
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/',
      title: 'Home',
      displayMode: 'alwaysText',
      text: 'Home',
    },

    {
      path: '/csrnotes',
      title: 'CSR',
      displayMode: 'alwaysText',
      text: 'CSR',
    },
  ],
  socialLinks: [
    {
      link: 'https://github.com/extouchtriangle/csrnotes',
      title: 'github repo',
      displayMode: 'alwaysIcon',
      icon: 'i-uil-github-alt',
    },
  ],
  navBarLayout: {
    left: [],
    right: [
      'internalNavs',
      'hr',
      'socialLinks',
      'hr',
      'searchButton',
      'themeButton',
      'rssLink',
    ],
    mergeOnMobile: true,
  },
  tabbedLayoutTabs: [
    { title: 'Changelog', path: '/changelog' },
    { title: 'AstroBlog', path: '/feeds' },
    { title: 'AstroStreams', path: '/streams' },
  ],
  postView: {
    postMetaStyle: 'minimal',
    useCoverAltAsCaption: true,
  },
  groupView: {
    maxGroupColumns: 3,
    showGroupItemColorOnHover: true,
  },
  githubView: {
    monorepos: [
      'withastro/astro',
      'withastro/starlight',
      'lin-stephanie/astro-loaders',
    ],
    mainLogoOverrides: [
      [/starlight/, 'https://starlight.astro.build/favicon.svg'],
    ],
    subLogoMatches: [
      [/theme/, 'i-unjs-theme-colors'],
      [/github/, 'https://github.githubassets.com/favicons/favicon.svg'],
      [/tweet/, 'i-prime-twitter'],
      [/ins/, 'i-skill-icons-instagram'],
      [/bluesky/, 'i-logos-bluesky'],
    ],
  },
  externalLink: {
    newTab: false,
    cursorType: '',
    showNewTabIcon: false,
  },
}

/**
 * Globally controls whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  slideEnterAnim: [true, { enterStep: 80 }],
  ogImage: [
    true,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: 'plum',
      collections: [
        { collection: 'blog', pathnamePrefix: '/blog' },
        { collection: 'changelog', pathnamePrefix: '/changelog' },
        { collection: 'shorts', pathnamePrefix: '/shorts' },
      ],
    },
  ],
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: 'right',
      displayMode: 'content',
    },
  ],
  share: [
    true,
    {
      twitter: [true, '@ste7lin'],
      bluesky: [true, '@ste7lin.bsky.social'],
      mastodon: false,
      facebook: false,
      pinterest: false,
      reddit: false,
      telegram: false,
      whatsapp: false,
      email: false,
    },
  ],
  giscus: [
    true,
    {
      'data-repo': 'lin-stephanie/astro-antfustyle-theme',
      'data-repo-id': 'R_kgDOLylKbA',
      'data-category': 'Giscus',
      'data-category-id': 'DIC_kwDOLylKbM4Cpugn',
      'data-mapping': 'title',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-lang': 'en',
    },
  ],
  search: [
    true,
    {
      includes: ['csrnotes'],
      filter: true,
      navHighlight: true,
      batchLoadSize: [true, 5],
      maxItemsPerPage: [true, 3],
    },
  ],
  tag: [
    true,
    {
      displayPosition: 'right',
      displayMode: 'content',
      filterMode: 'AND',
    },
  ],
}
