/*
    ejeccicios basicos ts
 */

//01
import { emailTemplate } from './services/01-template';
console.log(emailTemplate);

//02
import './services/02-destructuracion';

//03
import{ getUserById } from './services/03-callbacks';

const id: number = 2
getUserById(id, function(error, user){
    if(error){
        throw new Error(error)
    }

    console.log(user);
});

//04
import{ getUserById2 } from './services/04-arrow';

const id2: number = 1;
getUserById2(id2, (error, user) => {
    if(error){
        throw new Error(error);
    }

    console.log(user)
})

//05
import { buildMakePerson } from './services/05-factoryFunctions';
import { getDate, getUUID } from './plugins'; //patron adaptador

const makePerson = buildMakePerson({ getDate, getUUID })//resolver dependencias
const person = makePerson({ name: 'david', birthdate: '1998/04/07' }) //crear persona

console.table(person)


//06
import { getPokemonById } from './services/06-promises';
getPokemonById(2, (name) => {
    console.log(name)
})

//07
import { getPokemonById2 } from './services/07-promisesEnCadena';
getPokemonById2(3)
    .then((pokemon) => console.log(pokemon))
    .catch((err) => console.log("intente nuevamente", err))
    .finally(() => console.log("finalizo 07"));


//08
import { getPokemonById3 } from './services/08-metodoAsyng';
getPokemonById3(6)
    .then((pokemon) => console.log(pokemon))
    .catch((err) => console.log(err))
    .finally(() => console.log('finalizo 08'));


//09
import { getPokemonById as getPokemonById4 } from './services/09-metodoPeticionAdaptador';
getPokemonById4(11)
    .then((pokemon) => console.log(pokemon))
    .catch((err) => console.log(err))
    .finally(() => console.log('finalizo 09'));


//10
import { buildLogger } from './services/10-logger';
const logger = buildLogger('app.js')
logger.log('hola mundo')
logger.error('este es un error')