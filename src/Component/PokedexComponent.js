import React, { useState, useEffect } from 'react';
import PokedexPokemonComponent from './PokedexPokemonComponent';

const PokedexComponent = () => {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ data, setData ] = useState([])

 useEffect(() => {
    async function fetchData() {
    setIsLoading(true)
    const fetcher = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    const response = await fetcher.json()
    setData(response.results)
    setIsLoading(false)
  }
  fetchData()
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
    {
      isLoading ? <div>Loading</div> : data.map((pokemon, each) => {
        return <PokedexPokemonComponent key={each} id={each+1} name={pokemon.name} />
      })
    }

    </div>
  </div>
  )
}
export default PokedexComponent;
