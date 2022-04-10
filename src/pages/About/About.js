import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AboutPokemon from '../../components/AboutPokemon/AboutPokemon'
import styles from './About.module.scss'
import img from '../../components/img/pokeapi.png'

function About() {
  const [pokeAbout, setPokeAbout] = useState([])

  const getPokeAbout = async (url) => {
    const pok = await fetch(url)
    const data = await pok.json()

    return {
      url: data.sprites.other.dream_world.front_default,
      name: data.name,
      stats: data.stats,
    }
  }

  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=30'
        )
        const data = await response.json()
        const Arr = await Promise.all(
          data.results.map((item) => getPokeAbout(item.url))
        )
        setPokeAbout(Arr)
      } catch (e) {}
    }
    getAll()
  }, [])

  return (
    <div className={styles.About}>
      <div className={styles.LinkAbout}>
        <img src={img} alt="logo" />
        <Link to="/">Home</Link>
        <Link to="/about">About Pokemons</Link>
      </div>
      {pokeAbout.map((elem) => {
        return (
          <AboutPokemon
            url={elem.url}
            name={elem.name}
            stats={'STATS:'}
            hp={`hp: ${elem.stats[0].base_stat}`}
            attack={`attack: ${elem.stats[1].base_stat}`}
            deffence={`deffence: ${elem.stats[2].base_stat}`}
            specialAttack={`special attack: ${elem.stats[3].base_stat}`}
            specialDeffence={`special deffence: ${elem.stats[4].base_stat}`}
            speed={`speed: ${elem.stats[5].base_stat}`}
          />
        )
      })}
    </div>
  )
}

export default About
