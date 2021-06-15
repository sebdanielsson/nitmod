/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'N!tmod',
  tagline: "Let's come up with a good tagline",
  url: 'https://etmods.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
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
        alt: 'N!tmod Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Installation',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Cvar reference',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'NxAC',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://etmods.net/forums',
          label: 'Forums',
          position: 'left',
        },
        {
          href: 'https://github.com/sebdanielsson/nitmod-docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/UHBpfFMHSX',
          label: 'Discord',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
          title: 'Forums',
          items: [
            {
              label: 'Tutorial',
              to: 'https://etmods.net/forums',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sebdanielsson/nitmod-docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/UHBpfFMHSX',
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
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} N!tmod.`,
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
