const baseApi = 'http://api.wikispy.site/'
// const baseApi = 'http://api.wikispy.test/'

const config = {
	api: {
		getRevs: `${baseApi}?action=get_revs`,
		search: `${baseApi}?action=search`,
	},
	charts: {
		types: {
			revs: [
				{
					name: 'No bots',
					value: 'nobots'
				},
				{
					name: 'All',
					value: 'all'
				},
				{
					name: 'Bots only',
					value: 'bots'
				},
			]
		},
		styles: {
			lines: [
				{
					name: 'Line',
					value: 'line'
				},
				{
					name: 'Bars',
					value: 'bars'
				}
			]
		}
	},
	wiki: {
		url: 'https://fallout.fandom.com/ru/wiki/',
		actions: {
			edit: '?action=edit',
			history: '?action=history',
			raw: '?action=raw',
			rev: '?oldid=',
		}
	}
}

export default config