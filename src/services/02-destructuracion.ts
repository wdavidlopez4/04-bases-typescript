/*
    ejemplo de destructuracion de un objeto y llamado al objeto padre process
    procees contiene toda la informacion de la aplicacion como el SHELL y el puerto
    en donde se esta ejecutando
 */

//ejemplo procesos
const { SHELL } = process.env;
console.log(SHELL);

//ejemplo destricuracion
export const superheroe = ['flash', 'super perro', 'superman', 'batman'];
const [, , batman] = superheroe;