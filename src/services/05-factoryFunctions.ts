/*
    la funcion buildMakePerson resulve las dependencias para crear una persona,
    se le pasan por parametro

    dentro de la funcion buildMakePerson existe una arrow funccion que crea retorna la
    persona, para crear la persona se debe pasar nombre y fecha

    como observamos estamos desacoplando la creacion de la persona, no necesitamos
    llamar funciones externas para calcular la fecha ni el id

    en este caso utilizamos el patron adabtador y las factury functions
 */

    //interfas que contiene cabezeras de funciones
    interface BuildMakePersonOptions{
        getDate: (birthdate: string) => string,
        getUUID: () => string
    }

    //interfas que declara propiedades
    interface PersonOptions{
        name: string,
        birthdate: string
    }

    //exportamos la funcion
    export const buildMakePerson = ({getDate, getUUID} : BuildMakePersonOptions)  => {
        return ({ name, birthdate } : PersonOptions) => {
    
            return {
                id: getUUID(),
                name: name,
                birthdate: birthdate,
                age: getDate(birthdate)
            }
        }
    }