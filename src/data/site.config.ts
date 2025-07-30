interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://curioxity-labs.github.io/CurioXity.github.io/', // Write here your website url
	author: 'Nikhil & Satyam', // Site author
	title: 'CurioXity Labs', // Site title.
	description: 'New Subcommunity from NgKore', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
