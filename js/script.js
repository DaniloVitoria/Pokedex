const fetchPokemon = async (pokemon) => {
    // é uma função asyncrona e espera essa função ser executada para os outros codigos serem executados
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    const data = await APIResponse.json();
    
    console.log(data);
    //extraindo dados json

}

fetchPokemon('25')
