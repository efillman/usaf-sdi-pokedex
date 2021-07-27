SDI Pokedex
Create a pokedex single page app using React Hooks and create-react-app. Please use the pokemon API  we have seen throughout the class.
Use the following user stories to guide your development:

As a user, I should be able to navigate to the home page and see a list of all the pokemon (at least the first 151), including their pictures, so that I can review the pokemon.

As a user I should be able to click on a pokemon’s picture that directs me to a web page that provides additional information about that pokemon, so that I can learn more about an individual pokemon.

As a user I should be able to navigate to an about page from any other page, so that I can read information about the team that developed this Pokedex application.

As a user when I am in the pokedex page that lists the pokemon, I should be able to use a dropdown box to filter the pokemon by their types, so that I can identify the pokemon of a particular type.

As a user, when I am viewing an individual pokemon, I should be presented with a panel that defaults to showing me their abilities, so that I can see their abilities.

As a user, I should be able to click an “environment” link/button from inside the individual pokemon page that changes the panel from abilities to information about that pokemon’s environment.

[] App.js
  [] NavBar Header Component (to the top)
  [] PokedexComponent (to the left) - fetches first 151 pokemon to Json
    [] useEffect to fetch from the API on mount, state of pokedex with pokemon list
    [] FilterComponent (updates state to pokedex component of filter)
    [] PokedexPokemonComponent - displays picture of pokemon from pokemon list
  [] PokemonComponent (to the right) - displays individual pokemon abilities - eventually make a toggle button
  [] split / left and right between individual pokemon abilities and pokemons environment
  [] About page


//API Calls
GET: https://pokeapi.co/api/v2/pokemon/?limit=151
{
    "count": 1118,
    "next": "https://pokeapi.co/api/v2/pokemon/?offset=5&limit=5",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
    ]
}

GET: https://pokeapi.co/api/v2/pokemon/{id}/

{
     "abilities": [
        {
            "ability": {
                "name": "keen-eye",
                "url": "https://pokeapi.co/api/v2/ability/51/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "tangled-feet",
                "url": "https://pokeapi.co/api/v2/ability/77/"
            },
            "is_hidden": false,
            "slot": 2
        },
        {
            "ability": {
                "name": "big-pecks",
                "url": "https://pokeapi.co/api/v2/ability/145/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
  "sprites": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png",
        "back_female": null,
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/17.png",
        "back_shiny_female": null,
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/17.png",
        "front_shiny_female": null,
  },
   "types": [
        {
            "slot": 1,
            "type": {
                "name": "normal",
                "url": "https://pokeapi.co/api/v2/type/1/"
            }
        },
        {
            "slot": 2,
            "type": {
                "name": "flying",
                "url": "https://pokeapi.co/api/v2/type/3/"
            }
        }
    ],
}