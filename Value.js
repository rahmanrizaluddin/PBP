const profile = {
    firstName : "Rahman",
    lastName : "Rizaluddin",
    age : 20
}
const {firstName, age, isMale = false} = profile;
console.log(firstName)
console.log(age)
console.log(isMale)