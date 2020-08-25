const selectUser = document.querySelector('select[name=userType]')
const matriculaInput = document.querySelector('input[name=matricula]')
const symptomsList = document.getElementsByClassName('symptoms')
const noSymptomsCheck = document.querySelector('input[name=no-symptoms]')
const declarationCheck = document.querySelector('input[name=declaration]')
const symptomsInput = document.querySelector('input[name=symptoms]')
const cpfInput = document.getElementById('cpf')
// var cpf = document.querySelector("#cpf");

// cpf.addEventListener("blur", function(){
//    if(cpf.value) cpf.value = cpf.value.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-");
// });

async function mask(cpf){
    let cpfValue = cpf.value
    
    if(isNaN(cpfValue[cpfValue.length-1])){ // impede entrar outro caractere que não seja número
        cpf.value = cpfValue.substring(0, cpfValue.length-1)
        return
    }

    cpf.setAttribute("maxlength", "11");

    if (cpfValue.length < 11) {
        selectUser.disabled = true
        matriculaInput.disabled = true
        noSymptomsCheck.disabled = true
        declarationCheck.disabled = true

        for(let symptom of symptomsList){
            symptom.disabled = true
        }
    } else {
        await verifyCPF(cpfValue)
    }
}

selectUser.addEventListener('change', () => {
    if ( selectUser.value == 0)  matriculaInput.setAttribute("maxlength", "5")
    else matriculaInput.setAttribute("maxlength", "6")
})

async function identification(id){
    let idValue = id.value
    
    if(isNaN(idValue[idValue.length-1])){ // impede entrar outro caractere que não seja número
        id.value = idValue.substring(0, idValue.length-1)
        return
    }

    const idLength = matriculaInput.getAttribute("maxlength")

    if (idValue.length < idLength) {
        noSymptomsCheck.disabled = true
        declarationCheck.disabled = true

        for(let symptom of symptomsList){
            symptom.disabled = true
        }
    } else {
        await verifyIdentification(idValue)
    }
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

 async function verifyCPF(cpfValue) {
    const checked = await fetch(`http://localhost:5000/cpf/${cpfValue}`)

    if(checked.status !== 200) {
        alert('CPF inválido')
        return
    }
    selectUser.disabled = false
    matriculaInput.disabled = false
}

async function verifyIdentification(idValue) {
    const checked = await fetch(`http://localhost:5000/identification/${idValue}`)

    if(checked.status !== 200) {
        alert('Informação inválida')
        return
    }
    for(let symptom of symptomsList){
        symptom.disabled = false
    }

    noSymptomsCheck.disabled = false
    declarationCheck.disabled = false
}


