// --------------------------------------------- Questão 10 -------------------------------------------- //

a = '17 28 30'; // Maria
b = '99 16 8'; // João
console.log(compareElements(a, b));

function compareElements(a, b) {
    const maria = a.split(' ');
    const joao = b.split(' ');
    if (maria.length === 3 && joao.length === 3) { // Garantindo que teremos apeneas [0], [1] e [2]
        let cont_maria = 0, cont_joao = 0;
        for (var i = 0; i < 3; i++) { // Loop para percorer os elementos
            if (parseInt(maria[i]) > parseInt(joao[i])) { // Pontuando Maria
                cont_maria++;
            } else if (parseInt(maria[i]) < parseInt(joao[i])) { // Pontuando João
                cont_joao++;
            }
        }
        return [cont_maria, cont_joao];
    } else { // Caso esteja fora do formato esperado
        return 'O formato de entrada deverá ter 3 numeros separados por virgula';
    }
}
