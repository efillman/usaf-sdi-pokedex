import React, { } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Component/Home'
import PokedexComponent from './Component/PokedexComponent'
import About from './Component/About'
import PokemonComponent from './Component/PokemonComponent'

const Router = () => {
  return (
    <main>
			<Switch>
				<Route exact path="/" component={PokedexComponent} />
        <Route exact path="/about" component={About} />
        <Route exact path="/:pokemon" component={PokemonComponent} />

			</Switch>
		</main>
  )
}

export default Router