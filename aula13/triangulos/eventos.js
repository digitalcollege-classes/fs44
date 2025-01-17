const ladoA = prompt('Me informe o Lado A do triangulo?');
const ladoB = prompt('Me informe o Lado B do triangulo?');
const ladoC = prompt('Me informe o Lado C do triangulo?');

/*
03 lados iguais: EQUILATERO
02 lados iguais: ISOSCELES
03 lados diferentes: ESCALENO
*/

if (ladoA === ladoB && ladoB === ladoC) {
    alert('EQUILATERO');
} else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
    alert('ESCALENO');
} else {
    alert('ISOSCELES');
}

// if (ladoA === ladoB && ladoB === ladoC) {
//     alert('EQUILATERO');
// } else if (ladoA === ladoB && ladoB !== ladoC) {
//     alert('ISOSCELES');
// } else if (ladoA === ladoC && ladoA !== ladoB) {
//     alert('ISOSCELES');
// } else {
//     alert('ESCALENO');
// }

if (10 == 10) {
    //igual
} else {
    // nao igual
}