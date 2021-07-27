import React, { useState, useEffect } from 'react';

const PokedexPokemonComponent = (props) => {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ data, setData ] = useState([])

 useEffect(() => {
    async function fetchData() {
    setIsLoading(true)
    const fetcher = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}/`)
    const response = await fetcher.json()
    setData(response)
    setIsLoading(false)
  }
  fetchData()
  }, [props.name])

  const displayPokemonCard = () => {
    return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">{data.name}</div>
        <p class="card-text">{data.id}</p>
        <img src={data.sprites.front_default} alt={data.name} />
      </div>
    </div>
    )
  }

  return isLoading ? <div>Loading</div> : displayPokemonCard()
}

export default PokedexPokemonComponent;
