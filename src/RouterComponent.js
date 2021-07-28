import React, { } from 'react';
import { Switch, Route, Router } from "react-router-dom";
import Home from './Component/Home'
import PokedexComponent from './Component/PokedexComponent'
import About from './Component/About'
import PokemonComponent from './Component/PokemonComponent'

const RouterComponent = (props) => {

  const displayRouter = () => {
    return (
      <main>
        <Switch >
          <Route exact path="/" component={ props => <PokedexComponent {...props} />} />
          <Route exact path="/about" render={ props => <About {...props} />} />
          <Route exact path="/:pokemon" component={PokemonComponent} />
        </Switch>
      </main>
    )
  }
//<Route path="/greeting/:name" render={(props) => <Greeting text="Hello, " {...props} />} />

  return (
    props.data ?  <PokedexComponent {...props} /> : <div>Loading</div>

    // <Switch >
    //   <Route exact={true} path="/" render={(props) => <PokedexComponent {...props} pageID={2} />} />
    //   <Route exact path="/" component={ props => <PokedexComponent {...props} />} />
    //   <Route exact path="/about" render={ props => <About {...props} />} />
    //   <Route exact path="/:pokemon" component={PokemonComponent} />
    // </Switch>
  )
}

export default RouterComponent
//<Route path="/example" render={props => <Example {...props} />} />
//<Route path="/foo" component={ props => <Bar myprop="yay" {...props} /> } />