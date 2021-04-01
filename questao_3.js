// --------------------------------------------- Questão 3 -------------------------------------------- //

let a = new Array(); // Por favor, utilize, também, os arrays comentados para fazer testes e conferências.
a = [2, 1, 3, 5, 3, 2];
// a = [2,4,3,5,1];
// a = [125, 127, 126, 127, 126, 126, 126, 128, 125];
// a = [-1, -10, -50, 0.25, 0.26, -20, -30];
// a = [-10, -5, 0, 5, 10];
// a = [6.3, 1.2, 2.5, 1.2, 6.2, 9.2, 6.3];

const result_1 = locateDuplicate(a);
console.log(result_1);
console.log('\n ----------------------------------- \n');
const result_2 = removeDuplicate(a);
console.log(result_2);

// --------------------- SEGUNDA DUPLICADA COM MENOR INDICE ------------------ //
function locateDuplicate(array) {
    if (Array.isArray(array)) { // Verificando se o que foi passado como parâmetro verdadeiramente é um array
        let indexDuplicate = array.length + 1; // Este valor SEMPRE será maior que a quantidade de loop do map
        let value = -1;
        let arrayVerifycation = []; // Array de Verificação
        // ------ Iniciando o Loop dos elementos do array ------- //
        array.map((r, index) => {
            if (arrayVerifycation.indexOf(r) > -1) { // Verifica se o value do loop já existe no Array de Verificação
                if (indexDuplicate > index) { // Verifica se o antigo index deve ser substituido por outro
                    indexDuplicate = index;
                    value = r;
                }
            }
            arrayVerifycation.push(r); // Adicionado novos elementos ao FINAL do array
        });
        return value;
    } // Não criei este ELSE (ou seja, caso não seja array) porque não foi pedido na questão. Essa é apenas uma segurança a mais.
}
// ------------------------------ REMOVENDO DUPLICATAS ----------------------- //
function removeDuplicate(array) {
    /*
     return [...new Set(array)];
     Acima temos uma forma de remover duplicatas em array. Eu, particulamente, a utilizo bastante.
     Porém, para esta questão, seguirei o raciocício utilizado na função locateDuplicate.
     Conduto, por favor, teste o return acima descomentando-a e comentando o restante da função abaixo.
     */
    let arrayNoDuplicate = [];
    if (Array.isArray(array)) {
        array.forEach((r) => { // Para variar um pouco, usarei o forEach aqui.
            if (arrayNoDuplicate.indexOf(r) === -1) {
                arrayNoDuplicate.push(r);
            }
        });
        return arrayNoDuplicate;
    }
}



