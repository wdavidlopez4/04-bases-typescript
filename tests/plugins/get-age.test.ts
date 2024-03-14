import { getDate, getDateTest } from '../../src/plugins/get-age.plugin'

describe('plugins/get-age.test.ts', () => {

    test('getDate retorna un numero', () => {
        const birthdate = '1998/04/07';
        const age = getDate(birthdate)

        expect(typeof age).toBe('number')
    });

    test('getDate retonna la edad', () => {
        const birthdate = '1998/04/07';
        const age = getDate(birthdate)

        expect(age).toBe(25)
    });

    //esta prueba es simplemente para ver como se hace un spia (MOOK)
    test('getDate retorna 0', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1998);

        const birthdate = '1995-04-07';
        const age = getDateTest(birthdate);

        expect(age).toBe(0);
    });
})