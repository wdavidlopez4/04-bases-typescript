import { getPokemonById } from '../../src/services/09-metodoPeticionAdaptador'

describe('services/09-metodoPeticionAdaptador.ts', () => {

    test('getPokemonById retorna pokemon', async () => {
        const id = 1;

        const pokemonName = await getPokemonById(id);

        expect(pokemonName).toBe('bulbasaur')
    });

    test('getPokemonById no retorna pokemon', async () => {
        const id = 1000000;

        try{
            const pokemonName = await getPokemonById(id);
        }
        catch(error){
            expect(error).toBe(`Pokemon no existe por el id ${id}`)
        }

    })
})