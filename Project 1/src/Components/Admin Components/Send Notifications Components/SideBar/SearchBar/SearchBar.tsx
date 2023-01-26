import React from 'react'
import styles from './SearchBar.module.scss'
const SearchBar = () => {
  return (
    <section className={styles["search-bar"]}>
    <input type="text"/>
    <button type="button">Search</button>
    </section>
  )
}

export default SearchBar