// --------------------------------------------- Questão 2 -------------------------------------------- //

/* Esta questão não está clara como deve ser resolvido. Preço que, por favor, considere isso durante a correção.
 * Enviei e-mail no dia 30/03 mas como não obetive resposta, resolvi responder da forma que considerei mais coerente.
 */

a = [1, 2, 3, 'X', 8, 9];
b = ['X', 6, 5, 4];
console.log(getValue(a, b));

function getValue(a, b) {
    let cont_a = 0;
    a.forEach(function (r_1) {
        if (!isNaN(r_1)) {
            cont_a += r_1;
        }
    });
    let cont_b = 0;
    b.map(function (r_2) {
        if (!isNaN(r_2)) {
            cont_b += r_2;
        }
    });
    return 'a=' + (30 - cont_a) + ' e b=' + (22 - cont_b);
}
