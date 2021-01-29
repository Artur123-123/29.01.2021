let imie = "Jaro"
let age = "1290"
let young = true

imie = "Radoslaw" 
console.log("Lux Jaro", imie)

let colour = "Grey"
const isYoung = true
const country = "Uk"
const names = "Jaroslav"
const surName = "Kowalski"

console.log(colour, isYoung, country, names, surName)

const payment = 4000
const bonus = 400
const sum = payment + bonus

function sumPaymentAndBonus(wyplata, premia) {
    return wyplata + premia 
}

const allMoney = sumPaymentAndBonus(100, 100)
console.log(allMoney)
const sth = sumPaymentAndBonus(4, 1)
console.log(sth)

const ab = 10000
const cd = 5000
const ef = 10
const neg = ab + cd 

function sumNumbers(ab, cd) {
    return (ab + cd) * ef
}
const all = sumNumbers(ab, cd, ef)
console.log(all)

const numberOne = 10
const numberTwo = 20
const numberThree = 30

const minus = numberOne - numberTwo

function secondSum(numberOne, numberTwo) {
    return (numberOne - numberTwo) * numberThree
}

const secondAll = secondSum(numberOne, numberTwo, numberThree)
console.log(secondAll)

const numberFour = 10
const numberFive = 20
const numberSix = 30 

const multiply = numberFour * numberFive

function thirdSum(numberFour, numberFive) {
    return (numberFour * numberFive) / numberSix
}

const thirdAll = thirdSum(numberFour, numberFive, numberSix)
console.log(thirdAll)

const numberSeven = 20
const numberEight = 30 
const numberNine = 40 

const secondMultiply = numberNine * numberSeven 

function fourthSum(numberNine, numberSeven) {
    return (numberNine * numberSeven) + numberEight
}

const fourthAll = fourthSum(numberNine, numberSeven, numberEight)
console.log(fourthAll)

function sumIfEquation(par1, par2) {
    if(par1 === 0, par2 === 0){
        return "nie dziel zero przez zero"
        
    }
    return par1 / par2
}

let wynik = sumIfEquation(0, 0)
console.log(wynik)

// function elseEquation(smth1, smth2, smth3){
//     if(smth1==0)
//     return
// }

function sumAndDivision(smth1, smth2, smth3) {
    if(smth3 === 4 || smth1 + smth2 === 10){
    return (smth1 + smth2) / smth3
    } else {
    return (smth1 + smth2) * smth3
    }
}

let score = sumAndDivision(10, 10, 2)
console.log(score)

function coloursThing(isBlue, isBlack) {
    if(isBlue==false || isBlack==true){
    return "Rzecz jest czarna"
    }else{
        return "Rzecz jest niebieska"
    }
}
const colours = coloursThing(true, false)
console.log(colours)

function sumString(thing1, thing2) {
    if(thing1 !== '' && thing2 !== '') {
        return thing1.trim() + '' + thing2.trim() 
    } else {
        return 'Dałeś pusty string'
    }
}

const napis = sumString("            jan          ", "             kowalski")
console.log(napis)

function sumString1(thing1, thing2, thing3) {
    if(thing1 !== '' && thing2 !== '' && thing3 !== '') {
        return thing1.trim() + '' + thing2.trim() + thing3.trim()
    } else {
        return 'Dałeś pusty string'
    }
}

const napis1 = sumString1("            jan          ", "             kowalski     ", "  tosty    ")
console.log(napis1)

