/**
 * crear una funcion de flecha para buscar usuario por id
 */

interface User {
    id: number,
    nombre: string
}

const users : User[] = [
    {
        id: 1,
        nombre: 'david'
    },
    {
        id: 2,
        nombre: 'jorge'
    },
]

export const getUserById2 = ( id : number,  callback : (error?: string, user?: User) => void ) => {
    const user = users.find((user) => user.id === id );

    (user)
    ? callback(undefined, user)
    : callback("usuario no existe");
}