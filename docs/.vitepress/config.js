export default {
	base: "/", // make sure this matches your repo name
	title: "Amplio",
	description: "Documentation for Amplion product",
	cleanUrls: true,
	markdown: {
		theme: {
			light: "catppuccin-latte",
			dark: "catppuccin-frappe",
		},
		image: {
			lazyLoading: true,
		},
	},

	themeConfig: {
		aside: true,
		outline: "deep",
		search: {
			provider: "local",
		},
		sidebar: [
			{
				text: "Program Specification",
				collapsed: false,
				items: [
					{ text: "Introduction", link: "/program-spec/introduction" },
					{ text: "Creating the Specification", link: "/program-spec/creating-the-spec" },
					// { text: 'Setup', link: '/acm/setup' },
				],
			},
			{
				text: "Audio Content Manager",
				collapsed: false,
				items: [
					{ text: "Introduction", link: "/acm/introduction" },
					{ text: "Installation", link: "/acm/installation" },
					{ text: "Importing Contents", link: "/acm/importing-contents" },
					{ text: "Importing Playlist Prompts", link: "/acm/importing-playlist-prompts" },
					{ text: "Importing System Prompts", link: "/acm/importing-system-prompts" },
					{ text: "Importing Custom Greetings", link: "/acm/importing-custom-greetings" },
					{ text: "Creating Deployment", link: "/acm/creating-deployment" },
				],
			},
		],
		editLink: {
			pattern:
				"https://github.com/LiteracyBridge/product-documtation/edit/main/docs/:path",
			text: "Edit this page on GitHub",
		},
		// footer: {
		//   message: 'Released under the MIT License.',
		//   copyright: 'Copyright © 2019-present Evan You'
		// },
		lastUpdated: {
			text: "Last updated",
			formatOptions: {
				dateStyle: "short",
				timeStyle: "short",
			},
		},
		docFooter: {
			prev: "Previous page",
			next: "Next page",
		},
	},
};
