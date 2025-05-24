// usual types

let name2: string = "Rex";
let age: number = 1;
let isGood: boolean = true;

let names: string[] = ['regos', 'hh']

//
type url = `https://${string}`

let myFacebookUrl: url = 'https://facebook.com/regis'


// objects, etc.

interface Person {
    name: string,
    age: number
}



let person1: Person = {
    name: 'rrrr',
    age: 1
}


class Car {
    model: string
    year: number
}


let hyndai: Car = {
    model: 'hyundai',
    year: 2024
}