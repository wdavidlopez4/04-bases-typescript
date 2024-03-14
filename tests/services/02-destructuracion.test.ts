import { superheroe } from '../../src/services/02-destructuracion'

describe('services/02-destructuracion.ts', () =>{

    test('contain superheroe superman', ()=>{
        expect(superheroe).toContain('superman')
    })
});