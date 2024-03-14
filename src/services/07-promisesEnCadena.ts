/*
    promesas en cadena
 */


    export const getPokemonById2 = (id : string | number) : Promise<string>  =>{
        const url = ` https://pokeapi.co/api/v2/pokemon/${id}` ;
    
        return fetch(url)
            .then((respuest) => respuest.json())
            .then((pokemon) => pokemon.name);
    }