import React, { useState, useEffect } from 'react';
import PokedexPokemonComponent from './PokedexPokemonComponent';
import { withRouter } from "react-router-dom";

const PokedexComponent = (props) => {

  return (
    <div className="container-fluid">
      <div className="row">
    {
      props.data ? props.data.map((pokemon, each) => {
        return <PokedexPokemonComponent key={each} id={each+1} data={pokemon} />
      }) : <div>Loading</div>
    }

    </div>
  </div>
  )
}
export default withRouter(PokedexComponent);


