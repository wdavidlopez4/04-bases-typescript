var getAge = require('get-age')

export const getDate = (birthdate: string) => {
    return getAge(birthdate)
}

export const getDateTest =(birthdate: string) =>{
    console.log(new Date().getFullYear())
    //1998 - 1998 es igual a 0 
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
}