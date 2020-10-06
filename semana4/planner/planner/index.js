function criarTarefa() {


    const inputTarefa = document.getElementById("tarefa")
    const diaSemana = document.getElementById("dias-semana").value;
    const ondeAcrescenta = document.getElementById(diaSemana)

    if (inputTarefa.value === "") {
        alert("Digite uma tarefa válida!")
        return
    }

    ondeAcrescenta.innerHTML += `<li>${inputTarefa.value}</li>`
    inputTarefa.value = ""
}


