
iniciarContagemRegressiva();

const sessao = setInterval(() => {
    inspira();

    setTimeout(() => {
        segura();
    }, 1500);

    setTimeout(() => {
        expira()
    }, 4000);

}, 8000);

