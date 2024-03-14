import { emailTemplate } from '../../src/services/01-template'


describe('services/01-template.ts', () =>{

    test('emailTemplate should contain hola', ()=>{
        expect(emailTemplate).toContain('hola')
    });

    test('emailTemplate should contain {{name}}', () => {
        expect(emailTemplate).toMatch(/{{name}}/)
    })

})