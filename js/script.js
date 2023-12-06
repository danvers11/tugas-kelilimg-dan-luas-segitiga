/*
var myName = "Daniel"
const myBirthday = "03-11-2000"
const age = 23

var aray = [1,2,3,4,5]

for(let i = 1; i < aray.length; i++){
    console.log(aray[i])
}

function hitung (angka1, angka2){
    return angka1 + angka2
}
console.log(hitung(1,2))

*/

//___________________________________

const inputField = document.getElementById("input-tinggi")
const buttonHitung = document.getElementById("button-hitung")
inputField.addEventListener('input', function(){
    var textInput = inputField.value.trim()
    if(validateInput(textInput)){
        buttonHitung.disabled = false
    } else{
        buttonHitung.disabled = true
    }
})

function validateInput(inputValue) {
    const intergerRegex = /^-?\d+$/;
    return intergerRegex.test(inputValue)
}