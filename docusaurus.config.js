// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TrendX',
  tagline: 'Bet on attention, not speculation',
  favicon: 'img/favicon.ico',

  url: 'https://trendx-docs.vercel.app', // OK for Vercel
  baseUrl: '/',

  organizationName: 'trendxbets-dev',
  projectName: 'trendx-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',

          // 👇 THIS MAKES DOCS THE HOMEPAGE
          routeBasePath: '/',

          editUrl: 'https://github.com/trendxbets-dev/trendx-docs/tree/main/',
        },
        blog: false, // turn off blog for now (cleaner, GitBook-style)
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'TrendX',
      logo: {
        alt: 'TrendX Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/trendxbets-dev/TrendX',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} TrendX`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
