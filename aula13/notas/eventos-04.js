let notas = [];
let quantidade = Number(prompt('Quantas voce quer?'));
let boletim = '';
let total = 0;

for (let n = 1; n <= quantidade; n++) {
    //aqui pede pra informar a Nota
    notas[n] = Number(prompt(`Me informe a nota 0${n}`));

    //aqui monta o boletim
    boletim += `Nota 0${n}: ${notas[n]}\n`;

    //aqui vai calculando o total
    total += notas[n];
}

alert(boletim);

let media = total / quantidade;

alert(`Sua media é: ${media}`); 