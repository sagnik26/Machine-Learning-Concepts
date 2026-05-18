import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Machine Learning Concepts',
  tagline:
    'Interactive notes on ML paradigms, training styles, the ML lifecycle, and ML Algorithms—with runnable demos you can explore in the browser.',
  favicon: 'img/favicon.ico',

  customFields: {
    heroPersonalNote:
      'I am exploring Machine Learning & will add all of my understandings here. This documentation will act as a footprint of what I have learnt over time.',
  },

  future: {
    v4: true,
  },

  // GitHub Pages deployment:
  // - Project site URL: https://<org>.github.io/<projectName>/
  // - So baseUrl must match "/<projectName>/"
  url: 'https://sagnik26.github.io',
  baseUrl: '/Machine-Learning-Concepts/',

  organizationName: 'sagnik26',
  projectName: 'Machine-Learning-Concepts',

  onBrokenLinks: 'throw',

  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ML Concepts',
      logo: {
        alt: 'Machine Learning Concepts',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Notes',
        },
        {
          href: 'https://github.com/sagnik26/Machine-Learning-Concepts',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ML Notes',
          items: [
            {
              label: 'Documentation',
              to: '/docs/Fundamentals/ml_training_types',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sagnik26/Machine-Learning-Concepts',
            },
          ],
        },
      ],
      copyright: `Exploring ML and capturing what I learn—this site is my footprint over time.<br />© ${new Date().getFullYear()} Machine Learning Concept Notes by Sagnik Ghosh`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
