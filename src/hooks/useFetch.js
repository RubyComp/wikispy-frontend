import { useState, useEffect } from 'react'

const useFetch = (url) => {

	const [data, setData] = useState([])

	useEffect(() => {
		fetch(url)
			.then((res) => {
				return res.json()
			})
			.then((json) => {
				if (json.status == 'ok') {
					setData(json.data)
				}
			})
	}, [url])

	return [data]
}

export default useFetch