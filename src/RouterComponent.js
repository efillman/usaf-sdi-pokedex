import React, { } from 'react';
import { Switch, Route} from "react-router-dom";
import PokedexComponent from './Component/PokedexComponent'
import About from './Component/About'
import PokemonComponent from './Component/PokemonComponent'

class RouterComponent extends React.Component {

  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <main>
        <Switch >
          <Route exact path="/" >
            <PokedexComponent {...this.props} />
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/pokemon/:pokemon">
            <PokemonComponent {...this.props} />
          </Route>
        </Switch>
      </main>

    )
  }
}

export default RouterComponent
//<Route path="/example" render={props => <Example {...props} />} />
//<Route path="/foo" component={ props => <Bar myprop="yay" {...props} /> } />