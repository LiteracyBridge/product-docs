export default {
	base: "/product-documtation/", // make sure this matches your repo name
	title: "Product Documentation",
	description: "Documentation for Amplion product",

  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-frappe",
    },
    image: {
      lazyLoading: true
    }
  },

	themeConfig: {
    aside: true,
    outline: 'deep',
    search: {
      provider: 'local'
    },
		sidebar: [
			{
				text: "Audio Content Manager",
				items: [
					{ text: 'Introduction', link: '/acm/introduction' },
					{ text: 'Setup', link: '/acm/setup' },
				],
			},
		],
    editLink: {
      pattern: 'https://github.com/LiteracyBridge/product-documtation/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You'
    // },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    }
	},

};
