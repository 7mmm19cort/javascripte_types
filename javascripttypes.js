const pet = [ 'lady', 'curly']

const curly = {
    name: "curly" , 
    age: 8 ,
    color: "white" ,
    // friend:4 lady

}
const lady = {
    name: "lady" , 
    age: 8 ,
    color: "tan" ,
    friend: curly

}
console.log(lady.friend.name)

