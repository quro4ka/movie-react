import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MovieCard.module.scss'

export const MovieCard = ({ movie }) => {
  const { Title, Poster, Year, imdbID } = movie
  console.log(imdbID)
  return (
    <Link to={`/movie/${imdbID}`}>
      <div className={styles.card}>
        <div className={styles.card__inner}>
          <div className={styles.card__top}>
            <img src={Poster} alt={Title} />
          </div>
          <div className={styles.card__bottom}>
            <div className={styles.card__info}>
              <h4>{Title}</h4>
              <p>{Year}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
