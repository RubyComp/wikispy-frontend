import config from '../config'

const wikiUrl = (action, data) => {
	
	const url = config.wiki.url

	switch (action) {
		case 'view':
			return url + data

		case 'raw':
		case 'edit':
		case 'history':
			return url + data + config.wiki.actions[action]

		case 'rev':
			return url + config.wiki.actions[action] + data
				
		default:
			return url
	}
}


export default wikiUrl