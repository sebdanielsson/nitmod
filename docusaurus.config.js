/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: "/docs",
        blogRouteBasePath: "/",
        docsDir: "docs",
        blogDir: "blog",
        removeDefaultStopWordFilter: false,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
        explicitSearchResultPath: false
      },
    ],
  ],
  title: 'N!tmod',
  tagline: 'Available for ET: Legacy 32-bit & 64-bit',
  url: 'https://sebdanielsson.github.io',
  baseUrl: '/nitmod/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  favicon: 'img/nitmod-square.webp',
  organizationName: 'sebdanielsson', // Usually your GitHub org/user name.
  projectName: 'nitmod', // Usually your repo name.
  deploymentBranch: 'gh-pages',
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
        {to: '/servers', label: 'Servers', position: 'right'},
        {
          href: 'https://discord.gg/UHBpfFMHSX',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://forums.etmods.net',
          label: 'Forums',
          position: 'right',
        },
        {
          href: 'https://github.com/sebdanielsson/nitmod',
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
              label: 'Servers',
              href: 'servers',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/UHBpfFMHSX',
            },
            {
              label: 'Forums',
              href: 'https://forums.etmods.net',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sebdanielsson/nitmod',
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
            'https://github.com/sebdanielsson/nitmod/edit/main/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/sebdanielsson/nitmod/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
