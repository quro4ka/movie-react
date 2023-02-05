import React from 'react'
import Slider from 'react-slick'
import styles from './MovieListing.module.scss'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../redux/slices/movieSlice'
import { MovieCard } from '../MovieCard/MovieCard'
import { settings } from '../../common/settings'

export const MovieListing = () => {
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)

  return (
    <div className={styles.container}>
      {/* Movies */}
      <div className={styles.movies__title}>Movies</div>

      {movies.Response ? (
        <Slider {...settings} className={styles.movies}>
          {movies.Search &&
            movies?.Search.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
        </Slider>
      ) : (
        <div>error</div>
      )}

      {/* Shows */}
      <div className={styles.movies__title}>Shows</div>
      {shows.Response ? (
        <Slider {...settings} className={styles.movies}>
          {shows.Search &&
            shows?.Search.map((show) => <MovieCard key={show.imdbID} movie={show} />)}
        </Slider>
      ) : (
        <div>error</div>
      )}
    </div>
  )
}
