const selectUser = document.querySelector('select[name=userType]')
const matriculaInput = document.querySelector('input[name=matricula]')
const symptomsCheck = document.getElementsByClassName('symptoms')
const noSymptomsCheck = document.querySelector('input[name=no-symptoms]')
const declarationCheck = document.querySelector('input[name=declaration]')

const cpfs = [
    "123.456.789-10",
    "123.456.789-11",
    "123.456.789-11",
]

// var cpf = document.querySelector("#cpf");

// cpf.addEventListener("blur", function(){
//    if(cpf.value) cpf.value = cpf.value.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-");
// });

console.log(cpf.value)

function mask(cpf){
    let cpfValue = cpf.value
    
    if (cpfValue.length < 14) {
        selectUser.disabled = true
        matriculaInput.disabled = true
        noSymptomsCheck.disabled = true
        declarationCheck.disabled = true

        for(let symptom of symptomsCheck){
            symptom.disabled = true
        }
    } else {
        verifyCPF(cpfValue)
    }
 
    if(isNaN(cpfValue[cpfValue.length-1])){ // impede entrar outro caractere que não seja número
        cpf.value = cpfValue.substring(0, cpfValue.length-1)
        return
    }

    cpf.setAttribute("maxlength", "14");
    if (cpfValue.length == 3 || cpfValue.length == 7) cpf.value += ".";
    if (cpfValue.length == 11) cpf.value += "-";

}

noSymptomsCheck.addEventListener('click', function(){
    for(let symptom of symptomsCheck){
        if(symptom.checked){
            symptom.checked = !symptom.checked
        }
        symptom.disabled = !symptom.disabled
    }
})

function verifyCPF(cpfValue) {
    const checked = cpfs.find( (cpf) => cpf == cpfValue)
    
    if(!checked) {
        console.log('CPF inválido')
        return
    }

    for(let symptom of symptomsCheck){
        symptom.disabled = false
    }


    // const cpf = event.target.value

    // const checked = cpfs.find( (value) => value == cpf)
    selectUser.disabled = false
    matriculaInput.disabled = false
    noSymptomsCheck.disabled = false
    declarationCheck.disabled = false
}


