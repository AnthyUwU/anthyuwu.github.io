import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Guia de Terapia Hormonal.',
  tagline: 'TH',
  favicon: 'static/img/favicon.ico',
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
      hideOnScroll: true,
    },
    footer: {
      links: [
        {
          title: 'Estradiol',
          items: [
            {
              label: 'Oral',
              to: '/hormonios/Oral'
            },
            {
              label: 'Injetável',
              to: '/hormonios/Injetável'
            },
            {
              label: 'Gel',
              to: '/hormonios/Gel'
            },
            {
              label: 'Adesivo',
              to: '/hormonios/Adesivo'
            }
          ]
        },
        {
          title: "Criadores",
          items: [
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
      copyright: '<div>Conteúdo feito com amor por <a href="https://discord.gg/VjX6TXu4">Anthy</a>. Site feito por <a href="https://discord.gg/RVmNwdt5">Luna</a></div>',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
