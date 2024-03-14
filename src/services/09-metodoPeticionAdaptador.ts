/*
    ejemplo de peticion con el patron adaptador
 */
   import { httpClient as http } from '../plugins';


   export const getPokemonById = async (id : string | number) : Promise<string> => {
        const url = ` https://pokeapi.co/api/v2/pokemon/${id}`;

        try{
          const pokemon = await http.get(url)
          return pokemon.name;

        }catch(error){
          throw `Pokemon no existe por el id ${id}`
        }
        
    }