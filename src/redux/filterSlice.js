import { createSlice } from '@reduxjs/toolkit'

// export const roomSearchableFields = ['category', 'type', 'bed', 'bedroom', 'place', 'country', 'bathrooms']

const initialState = {
  category: '',
  filterableField: [
   {minPrice: ''},
   {maxPrice: ''},
   {rooms: ''},
   {bed: ''},
   {bathrooms: ''},
   {type: ''}
  ]
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterKey: (state,action) => {
      state.category = action.payload
    },
    filterFiled: (state, action) => {
      state.filterableField = action.payload
    },
  
  },
})

export const { filterKey, filterFiled} = filterSlice.actions

export default filterSlice.reducer