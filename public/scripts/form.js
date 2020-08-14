const selectUser = document.querySelector('select[name=userType]')
const matriculaInput = document.querySelector('input[name=matricula]')
const symptomsList = document.getElementsByClassName('symptoms')
const noSymptomsCheck = document.querySelector('input[name=no-symptoms]')
const declarationCheck = document.querySelector('input[name=declaration]')
const symptomsInput = document.querySelector('input[name=symptoms]')

const cpfs = [
    "123.456.789-10",
    "123.456.789-11",
    "123.456.789-11",
]

// var cpf = document.querySelector("#cpf");

// cpf.addEventListener("blur", function(){
//    if(cpf.value) cpf.value = cpf.value.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-");
// });

function mask(cpf){
    let cpfValue = cpf.value
    
    if (cpfValue.length < 14) {
        selectUser.disabled = true
        matriculaInput.disabled = true
        noSymptomsCheck.disabled = true
        declarationCheck.disabled = true

        for(let symptom of symptomsList){
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

let symptoms = []

for (symptom of symptomsList) {
    symptom.addEventListener('click', handleSelectedSymptom)
}

function handleSelectedSymptom(event) {
    const symptom = event.target
    const symptomId = symptom.dataset.id

    const alreadySelected = symptoms.findIndex(symptom => symptom == symptomId)
    
    console.log(symptom.checked)

    if (alreadySelected != -1) {
        const filteredSymptoms = symptoms.filter(symptom => symptom != symptomId)

        symptoms = filteredSymptoms

    } else {
        symptoms.push(symptomId)
    }

    symptomsInput.value = symptoms
}

noSymptomsCheck.addEventListener('click', function(){
    for(let symptom of symptomsList){
        if(symptom.checked){
            symptom.checked = !symptom.checked
        }
        
        symptom.disabled = !symptom.disabled
    }

    // if(noSymptomsCheck) {
    //     symptoms.value = ""
    // }
    symptoms = []
})

function verifyCPF(cpfValue) {
    const checked = cpfs.find( (cpf) => cpf == cpfValue)
    
    if(!checked) {
        alert('CPF inválido')
        return
    }

    for(let symptom of symptomsList){
        symptom.disabled = false
    }

    // const cpf = event.target.value

    // const checked = cpfs.find( (value) => value == cpf)
    selectUser.disabled = false
    matriculaInput.disabled = false
    noSymptomsCheck.disabled = false
    declarationCheck.disabled = false
}


