import { createSlice } from '@reduxjs/toolkit'

const addOrRemoveNumber = (arr, num) => {
	const int = Number(num)
	const index = arr.indexOf(int)
	const newArr = Array.from(arr)
	if (index === -1) {
		newArr.push(int)
	} else {
		newArr.splice(index, 1)
	}
	return newArr
}

const searchSlice = createSlice({
	name: 'search',
	initialState: {
		text: '',
		page: 1,
		prepareText: '',
		namespaces: [0,1,2],
		types: 'all',
		loader: true
	},
	reducers: {
		setPrepareText(state, action) {
			state.prepareText = action.payload
		},
		setText(state, action) {
			state.text = action.payload
		},
		setPage(state, action) {
			state.page = action.payload
		},
		setLoader(state) {
			state.loader = true
		},
		setTypes(state, action) {
			state.types = action.payload
		},
		setNamespaces(state, action) {
			state.namespaces = action.payload
		},
		toggleNamespace(state, action) {
			const newList = addOrRemoveNumber(action.payload.namespaces, action.payload.ns)

			if (newList.length > 0)
				state.namespaces = newList
			else
				state.namespaces = [0]

		},
		unsetLoader(state) {
			state.loader = false
		},
	}
})

export const {
	setPrepareText,
	setText,
	setPage,
	setLoader,
	setTypes,
	setNamespaces,
	toggleNamespace,
	unsetLoader
} = searchSlice.actions
export default searchSlice.reducer