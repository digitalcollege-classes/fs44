let resposta = '';

for (let n = 1; n <= 100; n++) {
    resposta = '';

    if (n % 2 === 0) {
        resposta = 'Arri';
    }
    
    if (n % 5 === 0) {
        resposta += 'Egua';
    }

    document.write(`Numero ${n} - ${resposta} <br>`);
}
