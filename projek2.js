const profile = {
    firstName : "Rahman",
    lastName  : "Rizaluddin",
    age       : "20"
}

let firstName = "Der";
let age = 25
//menginisialisasi nilai baru melalui destructuring object
({firstName, age} = profile);
console.log(firstName);
console.log(age);