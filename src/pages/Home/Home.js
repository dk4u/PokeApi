import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pokemon from '../../components/Pokemon/Pokemon'
import styles from './Home.module.scss'
import img from '../../components/img/pokeapi.png'

function Home() {
  const [poke, setPoke] = useState([])

  const getPoke = async (url) => {
    const pok = await fetch(url)
    const data = await pok.json()

    return {
      url: data.sprites.other.dream_world.front_default,
      name: data.name,
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
          data.results.map((item) => getPoke(item.url))
        )
        setPoke(Arr)
      } catch (e) {}
    }
    getAll()
  }, [])

  const [value, setValue] = useState('')
  const filterPokemon = poke.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(value.toLocaleLowerCase())
  })

  const [inputValue, setInputValue] = useState('')

  return (
    <div className={styles.Home}>
      <div className={styles.Links}>
        <img src={img} alt="logo" />
        <Link to="/">Home</Link>
        <Link to="/about">About Pokemons</Link>
      </div>
      <div className={styles.Search}>
        <input
          type="text"
          placeholder="Find pokemon"
          onChange={(event) => setInputValue(event.target.value)}
        ></input>
        <button
          onClick={() => {
            setValue(inputValue)
          }}
        >
          Search
        </button>
      </div>
      {filterPokemon.map((elem, index) => {
        return (
          <Link to="/about" key={index}>
            <Pokemon url={elem.url} name={elem.name} />
          </Link>
        )
      })}
    </div>
  )
}

export default Home
