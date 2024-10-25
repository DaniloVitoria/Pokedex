const pokemonName = document.querySelector(".pokemon_name")
const pokemonNumber = document.querySelector(".pokemon_number")
const pokemonImage = document.querySelector(".pokemon_image")


var form = document.querySelector(".form")
var input = document.querySelector(".input_search")


var buttonext = document.querySelector(".button btn-next")


const fetchPokemon = async (pokemon) => {
    // é uma função asyncrona e espera essa função ser executada para os outros codigos serem executados
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(APIResponse.status === 200){

        const data = await APIResponse.json();
    
        return data;
        //extraindo dados json
            
    }

}

//renderizar os dados na tela

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = "Loading..."
    pokemonNumber.innerHTML = ""

    const data = await fetchPokemon(pokemon);
   if(data){
    pokemonNumber.innerHTML = data.id
    pokemonName.innerHTML = data.name
    
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    
    console.log(data)
     input.value = ''
   }else {
    pokemonName.innerHTML = "Not found :c"
    pokemonNumber.innerHTML = ""
   }
}

renderPokemon('1')



form.addEventListener('submit', (event)=>{

    
    event.preventDefault();

    renderPokemon(input.value.toLowerCase())
   
})

buttonext.addEventListener("click", (event)=>{

    let next = 1;
    renderPokemon( data.id + 1)
})