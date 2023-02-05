import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { APIKey } from '../../common/api/MovieApiKey'
import movieApi from './../../common/api/movieApi'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (search) => {
  // const movieText = 'Harry'
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${search}&type=movie`)

  return response?.data
})

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async (search) => {
  // const seriesText = 'Friends'
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${search}&type=series`)

  return response?.data
})

export const fetchAsyncDetails = createAsyncThunk('details/fetchAsyncDetails', async (id) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`)
  return response?.data
})

const initialState = {
  movies: {},
  shows: {},
  details: {},
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload
    },
    removeDetails(state) {
      state.details = {}
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('pending')
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log('fetch success')
      return {
        ...state,
        movies: action.payload,
      }
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('rejected')
      return {}
    },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      console.log('fetch success')
      return {
        ...state,
        shows: action.payload,
      }
    },
    [fetchAsyncDetails.fulfilled]: (state, action) => {
      console.log('fetch success')
      return {
        ...state,
        details: action.payload,
      }
    },
  },
})

export const { addMovies, removeDetails } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getAllDetails = (state) => state.movies.details
export default movieSlice.reducer
