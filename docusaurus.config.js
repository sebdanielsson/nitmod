/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'N!tmod',
  tagline: 'Available for ET: Legacy 32-bit & 64-bit',
  url: 'https://etmods.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/nitmod-square.webp',
  organizationName: 'sebdanielsson', // Usually your GitHub org/user name.
  projectName: 'nitmod-docusaurus', // Usually your repo name.
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
          docId: 'installation',
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
          href: 'https://www.paypal.com/donate?token=f_hY-YI0imkFarRsg7IouAp4SktL2zRMzD3_slsWKiwAX6zCsNXzX3lGLIV93zJRuO8Sn-1PQNh7KWgc',
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
              href: 'http://etmods.net/forums',
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
              to: 'https://www.paypal.com/donate?token=f_hY-YI0imkFarRsg7IouAp4SktL2zRMzD3_slsWKiwAX6zCsNXzX3lGLIV93zJRuO8Sn-1PQNh7KWgc',
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
            'https://github.com/sebdanielsson/nitmod-docusaurus/edit/main/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/sebdanielsson/nitmod-docusaurus/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
