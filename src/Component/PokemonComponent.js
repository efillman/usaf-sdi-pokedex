import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";

const PokemonComponent = (props) => {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ pokemonData, setPokemonData ] = useState([])

  const promiseInput = function(input)
  {
    //the input parameter is in scope to the below promise now
    return new Promise(function(resolve, reject)
    {
      resolve(input);
    });
  }

  useEffect(
    () => {
      const name  = props.match.params.pokemon
      let findPokemon = promiseInput(name)
      findPokemon.then((name) => {
        for (let i = 0; i < props.data.length; i++) {
          if (props.data[i].name === name) {
            setPokemonData(props.data[i].data)
            break;
          }
        }
      }).then(() => setIsLoading(false))
    },
    [props.match.params.pokemon, props.data],
  );

  const displayPokemonCard = () => {
    return (
      <article className="row justify-content-center">
    <div className="card col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-6" o>
      <img src={pokemonData.sprites.front_default} className="card-img-top" alt={pokemonData.name}></img>
      <div className="card-body align-items-center justify-content-center">
        <div className="card-text text-center">
        <h6 className="text-capitalize">{pokemonData.name}</h6>
        <span>Abilities</span>
        <ul>
        {pokemonData.abilities.map((ability) => {
          return <li>{ability.ability.name}</li>
        })}
        </ul>

        </div>
      </div>
    </div>
    </article>
    )
  }


  return (
    isLoading ?  <div>Loading</div> : displayPokemonCard()
  )
}

export default withRouter(PokemonComponent)