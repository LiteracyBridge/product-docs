export default {
	base: "/product-documtation/", // make sure this matches your repo name
	title: "Product Documentation",
	description: "Documentation for Amplion product",

  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-frappe",
    },
  },

	themeConfig: {
    aside: true,
    outline: 2,
		sidebar: [
			{
				text: "Audio Content Manager",
				items: [
					// { text: 'Introduction', link: '/introduction' },
				],
			},
		],
    editLink: {
      pattern: 'https://github.com/LiteracyBridge/product-documtation/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
	},

};
