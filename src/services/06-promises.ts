/*
    promesa para obtener los poquemon por id
 */

    export const getPokemonById = (id: string | number , callback: (name: string) =>  void) =>{
        const url = ` https://pokeapi.co/api/v2/pokemon/${id}` ;
    
        fetch(url)
            .then((response) => {
                response.json()
                    .then((pokemon) => {
                        callback(pokemon.name)
                    });
            });
    }