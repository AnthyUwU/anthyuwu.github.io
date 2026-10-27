import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Guia de Terapia Hormonal.',
  tagline: 'TH',
  favicon: 'img/HTHT.png',
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://anthyuwu.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AnthyUwU', // Usually your GitHub org/user name.
  projectName: 'anthyuwu.github.io', // Usually your repo name.
  deploymentBranch: 'main',
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/WSite_Banner.png',
    metadata: [{name: 'twitter:card', content: 'summary_large_image'}],
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    colorMode: {
      respectPrefersColorScheme: false,
      disableSwitch: true,
      defaultMode: 'dark',
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      }
    },
    navbar: {
      title: 'Guia de Terapia Hormonal',
      logo: {
        alt: 'Logo',
        src: 'img/HTHT.png',
      },
      items: [{
        href: 'https://discord.com/invite/5CevJqYs3f',
        position: 'right',
        label: 'Nosso Discord'
      },
    ],
      hideOnScroll: true,
    },
    footer: {
      links: [
        {
          title: 'Estradiol',
          items: [
            {
              label: 'Oral',
              to: '/Opções de TH transfeminina no Brasil/oral'
            },
            {
              label: 'Injetável',
              to: '/Opções de TH transfeminina no Brasil/injetável'
            },
            {
              label: 'Gel',
              to: '/Opções de TH transfeminina no Brasil/gel'
            },
            {
              label: 'Adesivo',
              to: '/Opções de TH transfeminina no Brasil/adesivo'
            }
          ]
        },
        {
          title: "Comunidade",
          items: [
            {
              label: "Server de Ajuda Trans",
              href: "https://discord.com/invite/5CevJqYs3f"
            }
          ]
        },
        {
          title: "Criadores",
          items: [
            {
              label: "StarP",
              href: 'https://x.com/StarPhod4'
            },
            {
              label: "Anthy",
              href: 'https://x.com/AnthyHost'
            },
            {
              label: "Luna",
              href: 'https://x.com/luna_voadora'
            }
          ]
        }
      ],
      // copyright: "Conteúdo feito com amor por Anthy e StarP. Site feito por Luna",
      copyright: '<div>Conteúdo feito com amor por <a href="https://discord.gg/VjX6TXu4">Anthy</a> e <a href="https://discord.gg/FJXCGTGQ">StarP</a>. Site feito por <a href="https://discord.gg/RVmNwdt5">Luna</a></div>',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
