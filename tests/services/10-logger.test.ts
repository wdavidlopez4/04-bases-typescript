import { buildLogger } from '../../src/services/10-logger'
import { logger as WinsronLogger } from '../../src/plugins/logger.pluggin'

describe('services/10-logger', () => {

    test('buildLogger retorna una funcion', () => {
        const logger = buildLogger('test');

        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function')
    });

    test('log de mensaje', () => {
        
        // 1. arrange (preparamos el ambiente MOOK)
        const WinsronLoggerMook = jest.spyOn(WinsronLogger, 'log'); //el metodo que vamos a probar se llama log
        const message = 'test mensaje';
        const service = 'test service';

        // 2. actuar (ejecutamos las funciones del logger)
        const logger = buildLogger(service);
        logger.log(message);

        // 3. verificamos 
        expect(WinsronLoggerMook).toHaveBeenCalledWith( //verificamos que almenos estemos llamando una vez al WinsronLoggerMook, osea que el servicio de log se este llamando dentro de mi metodo buildLogger
            'info',
            expect.objectContaining({ //que almenos debe contener esta informacion: level, message y service
                level: 'info',
                message,
                service
            })
        )

    })
})