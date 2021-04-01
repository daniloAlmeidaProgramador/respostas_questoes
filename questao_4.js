// --------------------------------------------- Questão 4 -------------------------------------------- //

const versionOS = '1.5.4.0'; // Versão fixa informada na questão
console.log(compareVersion(versionOS, '1.5.3.9')); // Faça testes trocando o segundo parâmetro enviado na função

function compareVersion(versionA, versionB) {
    const array_versionA = versionA.split('.'), array_versionB = versionB.split('.'); // Esta é outra forma de declarar viriáveis aproveitando o mesmo tipo
    if (array_versionA.length !== 4 || array_versionB.length !== 4) { // Verificação de segurança
        return 'As versões devem conter 4 números separados por vírgula';
    } else { // Se passar no teste de verificação
        if (versionA === versionB) { // Verificando, primeiro, se as versões são iguais
            return 0;
        } else { // Caso não sejam iguais
            // ---------------- Comparando 1º parâmetro --------------- //
            if (parseInt(array_versionA[0]) > parseInt(array_versionB[0])) {
                return 1;
            } else if (parseInt(array_versionA[0]) < parseInt(array_versionB[0])) {
                return -1;
            } else {
                // ---------------- Comparando 2º parâmetro --------------- //
                if (parseInt(array_versionA[1]) > parseInt(array_versionB[1])) {
                    return 1;
                } else if (parseInt(array_versionA[1]) < parseInt(array_versionB[1])) {
                    return -1;
                } else {
                    // ---------------- Comparando 3º parâmetro --------------- //
                    if (parseInt(array_versionA[2]) > parseInt(array_versionB[2])) {
                        return 1;
                    } else if (parseInt(array_versionA[2]) < parseInt(array_versionB[2])) {
                        return -1;
                    } else {
                        // ---------------- Comparando 4 º parâmetro --------------- //
                        if (parseInt(array_versionA[3]) >= parseInt(array_versionB[3])) {
                            return 1;
                        } else if (parseInt(array_versionA[3]) < parseInt(array_versionB[3])) {
                            return -1;
                        }
                    }
                }
            }
            // ---------------------- Fim das verificações ----------------- //
        }
    }
}
