import React, { useState, useEffect } from 'react';
import PokedexPokemonComponent from './PokedexPokemonComponent';
import { withRouter } from "react-router-dom";

const PokedexComponent = (props) => {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ filteredData, setFilteredData ] = useState([])
  const [ typeFilter, setTypeFilter ] = useState('')

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
      const type  = typeFilter
      let filterPokemon = promiseInput(type)
      setIsLoading(true)
      if (type) {
        filterPokemon.then(async (type) => {
          let typeFilteredData = []
          for (let i = 0; i < props.data.length; i++) {
            for (let j = 0; j < props.data[i].data.types.length; j++)
              if (props.data[i].data.types[j].type.name === type) {
                typeFilteredData.push(props.data[i]);
            }
          }
          return typeFilteredData;
        }).then((typeFilteredData) => setFilteredData(typeFilteredData))
          .then(() => setIsLoading(false))
      } else {
        setFilteredData(props.data)
        setIsLoading(false)
      }
    },
    [typeFilter, props.data],
  );


  const handleClick = value => () => {
    console.log(value)
    setTypeFilter(value)
  }
  return (
    <div className="container-fluid">
      <div className="row justify-content-center p-1">
        <div className="col">
        <span>Filter By Type: </span>
        <button onClick={handleClick('normal')}>Normal</button>
        <button onClick={handleClick('fire')}>Fire</button>
        <button onClick={handleClick('water')}>Water</button>
        <button onClick={handleClick('grass')}>Grass</button>
        <button onClick={handleClick('electric')}>Electric</button>
        <button onClick={handleClick('ice')}>Ice</button>
        <button onClick={handleClick('fighting')}>Fighting</button>
        <button onClick={handleClick('poison')}>Poison</button>
        <button onClick={handleClick('ground')}>Ground</button>
        <button onClick={handleClick('flying')}>Flying</button>
        <button onClick={handleClick('psychic')}>Psychic</button>
        <button onClick={handleClick('bug')}>Bug</button>
        <button onClick={handleClick('rock')}>Rock</button>
        <button onClick={handleClick('ghost')}>Ghost</button>
        <button onClick={handleClick('dragon')}>Dragon</button>
        <button onClick={handleClick('dark')}>Dark</button>
        <button onClick={handleClick('steel')}>Steel</button>
        <button onClick={handleClick('fairy')}>Fairy</button>
        </div>
      </div>

      <div className="row">
        {
        isLoading ? <div>Loading</div> : filteredData.map((pokemon, each) => {
        return <PokedexPokemonComponent key={each} id={each+1} data={pokemon} />
        })
        }

      </div>
    </div>
  )
}
export default withRouter(PokedexComponent);


