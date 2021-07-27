import React, { useState, useEffect } from 'react';
import PokedexModal from './PokedexModal';

const PokedexPokemonComponent = (props) => {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ data, setData ] = useState([])
  const [modalShow, setModalShow] = React.useState(false);


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
    <div className="card col-md-1 col-xs-3">
      <img src={data.sprites.front_default} className="card-img-top" alt={data.name}></img>
      <div className="card-body align-items-center justify-content-center">
        <div className="card-text text-center">{data.name}</div>
        <PokedexModal pokemon={data} show={modalShow} onHide={() => setModalShow(false)}/>
      </div>
    </div>
    )
  }

  return isLoading ? <div>Loading</div> : displayPokemonCard()
}

export default PokedexPokemonComponent;
