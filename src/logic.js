var $ = document.querySelector.bind(document);

var circle = $('#circle');
var mensagem = $('#mensagem');
var ciclo = 1;
var regressiva = 5; 

const iniciarContagemRegressiva = () => {
    contagem = setInterval(() => {

        display(regressiva);
        regressiva -= 1

        if (regressiva < 0)
            clearInterval(contagem)

    }, 1000);
}

const inspira = () => {
    trabalharAr('inspira');
}

const segura = () => {
    trabalharAr('segura');
}

const expira = () => {
    trabalharAr('expira');
    concluirCiclo();
}

const trabalharAr = trabalho => {

    display(trabalho);
    
    if (trabalho === 'segura')
        return;

    circle.classList.remove('inspira', 'expira');
    circle.classList.add(trabalho);
}

const concluirCiclo = () =>{
    ciclo++;

    if (ciclo === 10)
        encerrarSessao()
} 

const encerrarSessao = () => {
    display('vc é top!');
    clearInterval(sessao)
}

const display = text => mensagem.innerHTML = text;
