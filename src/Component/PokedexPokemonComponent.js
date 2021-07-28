import React, { useState, useEffect } from 'react';
import PokedexModal from './PokedexModal';
import { Link, useHistory } from "react-router-dom";

const PokedexPokemonComponent = (props) => {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ data, setData ] = useState([])
  const [modalShow, setModalShow] = React.useState(false);
  const history = useHistory();

  const handleOnClick = () => {
    history.push(`/${data.name}`);
  }


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
    <div className="card col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-6" onClick={handleOnClick}>
      <img src={data.sprites.front_default} className="card-img-top" alt={data.name}></img>
      <div className="card-body align-items-center justify-content-center">
        <div className="card-text text-center">
          <h6 className="text-capitalize">{data.name}</h6>
        </div>
      </div>
    </div>
    )
  }

  return isLoading ? <div>Loading</div> : displayPokemonCard()
}

export default PokedexPokemonComponent;
