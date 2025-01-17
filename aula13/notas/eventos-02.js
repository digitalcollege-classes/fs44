
let notas = [];

notas[0] = Number(prompt('Me informe a nota 01'));
notas[1] = Number(prompt('Me informe a nota 02'));
notas[2] = Number(prompt('Me informe a nota 03'));
notas[3] = Number(prompt('Me informe a nota 04'));

alert(`
    Nota 01: ${notas[0]}
    Nota 02: ${notas[1]}
    Nota 03: ${notas[2]}
    Nota 04: ${notas[3]}
`);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;

alert(`Sua media é: ${media}`); 