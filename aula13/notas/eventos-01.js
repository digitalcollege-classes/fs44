let quantidade = 4;

let n1 = Number(prompt('Me informe a nota 01'));
let n2 = Number(prompt('Me informe a nota 02'));
let n3 = Number(prompt('Me informe a nota 03'));
let n4 = Number(prompt('Me informe a nota 04'));

alert(`
    Nota 01: ${n1}
    Nota 02: ${n2}
    Nota 03: ${n3}
    Nota 04: ${n4}
`);

let media = (n1 + n2 + n3 + n4) / 4;

alert(`Sua media é: ${media}`); 