function sayHello() {
    return "Bonjour tout le monde";
}

console.log(sayHello())


function sayFullName(firstName) {
    return "Bonjour " + firstName
}


console.log(sayFullName("Thomas"))

function sayFullName(firstName, lastName) {
    return "Bonjour " + firstName + " " + lastName
}

console.log(sayFullName("Thomas", "Dimnet"))


function greetings(firstName) {
    if (firstName === "Thomas") {
        return "Tiens coucou " + firstName
    } else {
        return "Mais tes qui toi?"
    }
}

console.log(greetings("Thomas"))


function givePassword(password) {
    if (password === "azerty") {
        return "Vous etes autorisé a rentrer"
    } else {
        return "Ah non, c'est pas possible d'entrer."
    }
}

console.log(givePassword("Marc"))


function okBoomer(age) {
    if (age >= 40) {
        return "Ok, Boomer"
    } else {
        return "Ok, ca va"
    }
}

console.log(okBoomer(12))


function addition(a, b) {
    return a + b
}
console.log(addition(2, 3))


function salutation(nom) {
    return "Bonjour " + nom
}

console.log(salutation("Alice"))


function estPair(nombre) {
    if (nombre % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(estPair(4))
console.log(estPair(7))

function aireRectangle(longeur, largeur) {
    return longeur * largeur
}

console.log(aireRectangle(5, 3))

function estMajuscule(chaine) {
    if (chaine === chaine.toUpperCase()) {
        return true
    } else {
        return false
    }
}
console.log(estMajuscule("HELLO"))
console.log(estMajuscule("Hello"))


function maxDeuxNombres(a, b) {
    return Math.max(a, b)
}

console.log(maxDeuxNombres(5, 10))


function difference(a, b) {
    return a - b
}

console.log(difference(10, 3))

function convertirEnCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}
console.log(convertirEnCelsius(100))


function estMajeur(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

console.log(estMajeur(20))
console.log(estMajeur(16))


function maxTroisNombres(a, b, c) {
    return Math.max(a, b, c)
}

console.log(maxTroisNombres(3, 7, 5))

function calculer(a, b, operation) {
    return operation(a, b)
}


function addition(x, y) {
    return x + y
}


function multiplication(x, y) {
    return x * y
}


console.log(calculer(5, 3, addition))
console.log(calculer(5, 3, multiplication))
