import { getUUID } from '../../src/plugins/get-id.plugin'

describe('plugins/get-id.plugin.ts', () => {

    test('getUUID validar 36 caracteres y que sea string', () => {
        const UUID = getUUID();

        expect( typeof UUID).toBe('string');
        expect( UUID.length ).toBe(36)
    })
})