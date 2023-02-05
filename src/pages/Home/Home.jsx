import React, { useEffect } from 'react'
import { APIKey } from './../../common/api/MovieApiKey'
import movieApi from './../../common/api/movieApi'
import styles from './Home.module.scss'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/slices/movieSlice'
import { MovieListing } from '../../components/MovieListing/MovieListing'

export const Home = () => {
  const dispatch = useDispatch()
  const movieText = 'Harry'
  const showText = 'Friend'

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
  }, [dispatch])

  return (
    <div className={styles.home}>
      <MovieListing />
    </div>
  )
}
