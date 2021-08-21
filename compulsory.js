var myName = {
    firstName: "Busayo", 
    lastName: "Bamigbade"
}
const myFunc = (firstName, lastName) => {
    if(firstName !== "" && lastName !== "") {
    return "Hello there! My name is " + firstName + " " + lastName + "."
    }
}
console.log(myFunc(myName.firstName, myName.lastName));