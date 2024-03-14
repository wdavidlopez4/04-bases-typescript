interface User{
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

export function getUserById( id : number,  callback: (err?: string, user?: User) => void ){
    const user = users.find(function(user) {
        return user.id === id;
    });
    
    if(! user){
        return callback("usuario no existe");
    }

    callback(undefined, user)
}