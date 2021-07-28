import React, { } from 'react';

const PokemonComponent = (props) => {
  return (
    <div>
      <h1>{`${props.match.params.pokemon}`}</h1>
    </div>
  )

}

export default PokemonComponent