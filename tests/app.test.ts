

describe('Test in the app', () =>{
    test('should be 30', () =>{
        
        // 1. arrange
        const num1 = 20;
        const num2 = 10;

        // 2. actuar
        const result = num1 + num2;

        //3. verificar o Assert
        expect(result).toBe(30)
    })
})