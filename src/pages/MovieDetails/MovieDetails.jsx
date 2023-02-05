import React, { useEffect } from 'react'
import styles from './MovieDetails.module.scss'
import star from './../../assets/star.png'
import vote from './../../assets/vote.png'
import runtime from './../../assets/runtime.png'
import calendar from './../../assets/calendar.png'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncDetails, getAllDetails, removeDetails } from '../../redux/slices/movieSlice'

export const MovieDetails = () => {
  const { imdbID } = useParams()
  const {
    Title,
    imdbRating,
    imdbVotes,
    Runtime,
    Year,
    Plot,
    Director,
    Actors,
    Genre,
    Language,
    Awards,
    Poster,
  } = useSelector(getAllDetails)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncDetails(imdbID))

    return () => {
      dispatch(removeDetails())
    }
  }, [dispatch, imdbID])

  return (
    <div className={styles.movie}>
      {!Poster ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className={styles.movie__left}>
            <div className={styles.movie__title}>{Title}</div>
            <div className={styles.movie__rating}>
              <span>
                IMDB Rating <img src={star} alt="star" />: {imdbRating}
              </span>
              <span>
                IMDB Votes <img src={vote} alt="vote" /> : {imdbVotes}
              </span>
              <span>
                Runtime <img src={runtime} alt="runtime" /> : {Runtime}
              </span>
              <span>
                Year <img src={calendar} alt="calendar" /> : {Year}
              </span>
            </div>
            <div className={styles.movie__plot}>{Plot}</div>
            <div className={styles.movie__info}>
              <div className={styles.movie__info_about}>
                <span className={styles.movie__info_title}>Director</span>
                <span className={styles.movie__info_value}>{Director}</span>
              </div>
              <div className={styles.movie__info_about}>
                <span className={styles.movie__info_title}>Stars</span>
                <span className={styles.movie__info_value}>{Actors}</span>
              </div>
              <div className={styles.movie__info_about}>
                <span className={styles.movie__info_title}>Generes</span>
                <span className={styles.movie__info_value}>{Genre}</span>
              </div>
              <div className={styles.movie__info_about}>
                <span className={styles.movie__info_title}>Languages</span>
                <span className={styles.movie__info_value}>{Language}</span>
              </div>
              <div className={styles.movie__info_about}>
                <span className={styles.movie__info_title}>Awards</span>
                <span className={styles.movie__info_value}>{Awards}</span>
              </div>
            </div>
          </div>
          <div className={styles.movie__right}>
            <img src={Poster} alt={Title} />
          </div>
        </>
      )}
    </div>
  )
}
