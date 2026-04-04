// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)


// 参考: https://docusaurus.io/docs/deployment#deploying-to-github-pages

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ぽこポケ学会',
  url: 'https://kyu49.github.io',
  baseUrl: '/',
  organizationName: 'kyu49',
  projectName: 'kyu49.github.io',
  deploymentBranch: 'main',
  trailingSlash: false,
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: 'https://github.com/kyu49/pokopia/tree/main/'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ぽこポケ学会',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '資料一覧',
          },
          {
            href: 'https://github.com/kyu49/pokopia',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'コンテンツ',
            items: [
              {
                label: '攻略トップ',
                to: '/',
              },
              {
                label: 'ポケモン学会について',
                to: '/intro',
              },
            ],
          },
          {
            title: '法的情報 / License',
            items: [
              {
                label: 'AGPL-3.0 License',
                href: 'https://github.com/kyu49/pokopia/blob/main/LICENSE',
              },
              {
                label: 'ソースコード (GitHub)',
                href: 'https://github.com/kyu49/pokopia',
              },
            ],
          },
        ],
        // <br /> を使うためにバッククォート( ` )で囲む
        copyright: `
          Copyright © ${new Date().getFullYear()} ぽこあポケモン学会.<br />
          本サイトの独自コンテンツ（文章・構成・プログラム）は <b>AGPL-3.0</b> ライセンスの下で公開されています。<br />
          ただし、引用・埋め込みされたTwitter(X)の投稿、YouTube動画、およびゲーム内画像の著作権は、それぞれの権利所有者に帰属します。<br />
          Built with <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a> (MIT License).
        `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
