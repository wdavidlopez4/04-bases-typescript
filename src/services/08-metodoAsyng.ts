/*
    ejemplo metodo asincrono
 */


    export const getPokemonById3 = async (id : string | number) : Promise<string> =>{
        const url = ` https://pokeapi.co/api/v2/pokemon/${id}`;
    
        const resp = await fetch(url);
        const pokemon = await resp.json();
    
        return pokemon.name;
    }