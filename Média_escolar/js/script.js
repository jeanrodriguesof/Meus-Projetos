var evento = window.document.getElementById("bverificar");

evento.addEventListener("click", cliquei);

function cliquei(){
    var resultado = window.document.getElementById("res");
    var txt1 = window.document.getElementById("text1")
    var txt2 = window.document.getElementById("text2")
    var txt3 = window.document.getElementById("text3")
    var txt4 = window.document.getElementById("text4")

    var n1 = Number((txt1.value));
    var n2 = Number((txt2.value));
    var n3 = Number((txt3.value));
    var n4 = Number((txt4.value));

    var soma = (n1 + n2 + n3 + n4) / 4;

    if (txt1.value === "" || txt2.value === "" || txt3.value === "" || txt4.value === "") {
        resultado.innerHTML = "Por favor coloque todas as notas";
        return;
    }

    var mensagem;
    
    if(soma >=8){
       mensagem = `Aluno você está acima da média`
    }else if(soma >=6){
       mensagem =  `Aluno você está na média`
    }else{
       mensagem = `Aluno você está abaixo da média`
    }

    resultado.innerHTML = `${mensagem}`;
}
