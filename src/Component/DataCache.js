import React, { useState, useEffect } from 'react';

class DataCache extends React.Component {

  constructor(){
    super();
    this.state = {
      data: [],
      isLoading: true
    }
  }

  async componentDidMount() {
    await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(response => response.json())
      .then(async (response) => {
        for (let i = 0; i < response.results.length; i++) {
          let pokemon = response.results[i];
          const fetcher2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`)
          const response2 = await fetcher2.json();
          response.results[i]['data'] = response2;
        }
        return response
        })
      .then(response => this.setState({data: response}))
      .then(() => {this.setState({isLoading: false})})
      .then(() => {this.props.callback(this.state.data)})
  }

  render(){
    return (
    <div style={{display: "none"}}></div>
    )
  }
}

export default DataCache
