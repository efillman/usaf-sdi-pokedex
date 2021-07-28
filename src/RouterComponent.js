import React, { } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from './Component/Home'
import PokedexComponent from './Component/PokedexComponent'
import About from './Component/About'
import PokemonComponent from './Component/PokemonComponent'
import Header from "./Header"

class RouterComponent extends React.Component {

  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      //props.data ?  <PokedexComponent {...props} /> : <div>Loading</div>

      <BrowserRouter >
      <Header />
      <main>
        <Switch >
          <Route exact path="/" >
            <PokedexComponent {...this.props} />
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/:pokemon/:id">
            <PokemonComponent {...this.props} />
          </Route>
        </Switch>
      </main>
      </BrowserRouter>
    )
  }
}

export default RouterComponent
//<Route path="/example" render={props => <Example {...props} />} />
//<Route path="/foo" component={ props => <Bar myprop="yay" {...props} /> } />