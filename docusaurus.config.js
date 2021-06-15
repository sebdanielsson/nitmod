/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'N!tmod',
  tagline: "Let's come up with a good tagline",
  url: 'https://etmods.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/nitmod-square.webp',
  organizationName: 'nitmod', // Usually your GitHub org/user name.
  projectName: 'nitmod', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    
    navbar: {
      title: 'N!tmod',
      logo: {
        alt: 'Nitmod Logo',
        src: 'img/nitmod.webp',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'http://stats.etmods.net',
          label: 'Stats',
          position: 'left',
        },
        {
          href: 'http://bugs.etmods.net',
          label: 'Bug Tracker',
          position: 'left',
        },
        {
          href: 'https://discord.gg/UHBpfFMHSX',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'http://etmods.net/forums',
          label: 'Forums',
          position: 'right',
        },
        {
          href: 'https://github.com/sebdanielsson/nitmod-docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://etmods.net/donate',
          label: 'Donate',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Installation',
              to: '/docs/installation',
            },
            {
              label: 'Cvar reference',
              to: '/docs/cvar-reference',
            },
            {
              label: 'NxAC',
              to: '/docs/nxac',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/UHBpfFMHSX',
            },
            {
              label: 'Forums',
              href: 'https://etmods.net/forums',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sebdanielsson/nitmod-docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Stats',
              to: 'http://stats.etmods.net',
            },
            {
              label: 'Bug Tracker',
              to: 'http://bugs.etmods.net',
            },
            {
              label: 'Donate',
              to: 'https://etmods.net/donate',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} N!tmod`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
