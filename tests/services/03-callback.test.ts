/*
    el done permite esperar el colback en caso por ejemplo de que sea una peticcion http
 */

import { getUserById } from '../../src/services/03-callbacks';

describe('services/03-callbacks.ts', () =>{

    test('getUserById comprovar cuando hay el usuario no existe', (done) => {
        const id = 10;

        getUserById(id, (err, user) => {
            expect(err).toBe('usuario no existe');
            expect(user).toBeUndefined();

            done();
        })
    });

    test('getUserById comprovar cuando existe el usuario', () => {
        const id = 1;

        getUserById(id, (err, user) =>{
            expect(err).toBeUndefined();

            expect(user).toEqual({
                id: 1,
                nombre: 'david'
            },);
        })
    });

});