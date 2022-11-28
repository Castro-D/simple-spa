import { createSlice } from '@reduxjs/toolkit'
import jikan from "../../service/jikan";

export const initialState = {
  loading: false,
  hasErrors: false,
  cards: [],
}

const fetchSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {
    getData: (state) => {
      state.loading = true
    },
    getDataSuccess: (state, { payload }) => {
      state.cards = payload
      state.loading = false
      state.hasErrors = false
    },
    getDataFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const { getData, getDataSuccess, getDataFailure } = fetchSlice.actions

export const cardsSelector = (state) => state.fetch

export default fetchSlice.reducer

export function fetchCards(term) {
  return async (dispatch) => {
    dispatch(getData())

    try {
      const data = await jikan.searchAnime(term)
      dispatch(getDataSuccess(data.data))
    } catch (error) {
      dispatch(getDataFailure())
    }
  }
}