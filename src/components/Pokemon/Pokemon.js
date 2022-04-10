import React from 'react'
import styles from './Pokemon.module.scss'

function Pokemon(props) {
  return (
    <div className={styles.Poke}>
      <img className={styles.Image} src={props.url} alt="#" />
      <p>{props.name}</p>
    </div>
  )
}

export default Pokemon
