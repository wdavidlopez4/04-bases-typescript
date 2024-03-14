import { buildMakePerson } from '../../src/services/05-factoryFunctions'

describe('services/05-factoryFunctions.ts', ()=>{

    const getUUID = () => '1234';
    const getDate = () => '35';


    test('buildMakePerson returna una funcion', ()=>{
        const makePerson = buildMakePerson({getUUID, getDate});
        expect(typeof makePerson).toBe('function');
    });

    test('return PersonOptions', () => {
        const makePerson = buildMakePerson({getUUID, getDate}); //IOC
        const person = makePerson({name: 'william', birthdate: '12/04/15'}); //crear usuario

        expect(person).toEqual({ //evaluar el usuario
            id: '1234', 
            name: 'william', 
            birthdate: '12/04/15', 
            age: '35' });
    });
})