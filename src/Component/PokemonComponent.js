import React, { } from 'react';
import { withRouter } from "react-router-dom";

const PokemonComponent = (props) => {

  return (
    <div className="row">
      <div className="card">
        {(props.data[(parseInt(props.match.params.id)-1)]).data.name}
        {JSON.stringify((props.data[(parseInt(props.match.params.id)-1)]).data.abilities)}
      </div>
    </div>
  )
}

export default withRouter(PokemonComponent)