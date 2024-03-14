import { httpClient } from '../../src/plugins/http-client-plugin'

describe('lugins/http-client-plugin', () => {

    test('httpClient retorna un pokemon', async () =>{
        const data = await httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
        
        expect(data).toEqual({ 
            userId: 1, 
            id: 1, 
            title: 'delectus aut autem', 
            completed: expect.any(Boolean) })
    });
})