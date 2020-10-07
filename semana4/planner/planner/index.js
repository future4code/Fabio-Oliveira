function criarTarefa() {


    const inputTarefa = document.getElementById("tarefa")
    const diaSemana = document.getElementById("dias-semana").value;
    const ondeAcrescenta = document.getElementById(diaSemana)

    if (inputTarefa.value === "") {
        alert("Digite uma tarefa válida!")
        return
    }

    ondeAcrescenta.innerHTML += `<li class="limpar" onclick="riscarTarefa(this)">${inputTarefa.value}</li>`
    inputTarefa.value = ""
}

function riscarTarefa(id){
    id.style.textDecoration = "line-through";
}

function zerarTarefa() {
    let zerar = confirm("Deseja mesmo limpar sua lista de tarefas?")

    if(zerar === true){
        const limparTarefa = document.getElementsByClassName("limpar")

        for (let i = 0; i <limparTarefa.length; i++){
            limparTarefa[i].innerHTML = " "
        }
    }
}

