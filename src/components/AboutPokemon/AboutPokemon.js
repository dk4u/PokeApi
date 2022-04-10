import React from 'react'
import styles from './AboutPokemon.module.scss'

function AboutPokemon(props) {
  return (
    <div className={styles.AboutPokemon}>
      <img className={styles.ImageAboutPokemon} src={props.url} alt="" />
      <tr className={styles.TableOne}>
        <th>{props.name}</th>
        <tr>
          <h3>{props.stats} </h3>
          <td>{props.hp}</td>
          <td>{props.attack}</td>
          <td>{props.deffence}</td>
        </tr>
      </tr>
      <tr className={styles.TableTwo}>
        <td>{props.specialAttack}</td>
        <td>{props.specialDeffence}</td>
        <td>{props.speed}</td>
      </tr>
    </div>
  )
}

export default AboutPokemon
