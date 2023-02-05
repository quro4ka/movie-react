import { useState } from 'react'
import styles from './Search.module.scss'
import close from '../../assets/close.png'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/slices/movieSlice'

export const Search = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    if (search) {
      dispatch(fetchAsyncMovies(search))
      dispatch(fetchAsyncShows(search))

      setSearch('')
    }
  }

  const onSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className={styles.search}>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => onSearch(e)}
          type="text"
          placeholder="Enter movie title"
          value={search}
        />
        <button type="submit" className={styles.btn}>
          search
        </button>
      </form>
      {search && (
        <img onClick={() => setSearch('')} src={close} alt={close} className={styles.close} />
      )}
    </div>
  )
}
