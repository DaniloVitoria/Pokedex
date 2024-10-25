const pokemonName = document.querySelector(".pokemon_name");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonImage = document.querySelector(".pokemon_image");

var form = document.querySelector(".form");
var input = document.querySelector(".input_search");


var buttonext = document.querySelector(".button.btn-next");
var buttonprev = document.querySelector(".button.btn-prev")

let currentPokemonId = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = "Loading...";
    pokemonNumber.innerHTML = "";

    const data = await fetchPokemon(pokemon);
    if (data) {
        pokemonNumber.innerHTML = data.id;
        pokemonName.innerHTML = data.name;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        console.log(data);
        input.value = '';
        currentPokemonId = data.id; // Atualiza o ID do Pokémon atual
    } else {
        pokemonName.innerHTML = "Not found :c";
        pokemonNumber.innerHTML = "";
    }
}

renderPokemon(1);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

buttonext.addEventListener("click", (event) => {
    currentPokemonId++;
    renderPokemon(currentPokemonId);
});

buttonprev.addEventListener("click", (event) =>{
    if(currentPokemonId > 1){
        currentPokemonId--;
        renderPokemon(currentPokemonId)
    }
    
})

console.log("Fetching Pokemon:", data.name);
console.log("Fetched data:", data);

