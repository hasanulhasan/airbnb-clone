import { createSlice } from '@reduxjs/toolkit'

// export const roomSearchableFields = ['category', 'type', 'bed', 'bedroom', 'place', 'country', 'bathrooms']

const initialState = {
  category: '',
  filterableField: ['type', 'bed', 'bathrooms']
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterKey: (state,action) => {
      state.category = action.payload
    },
    filterFiled: (state, action) => {
      state.filterableField.push(action.payload)
    },
  
  },
})

export const { filterKey, changeLimit} = filterSlice.actions

export default filterSlice.reducer