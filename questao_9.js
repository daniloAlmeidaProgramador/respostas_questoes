// --------------------------------------------- Questão 9 -------------------------------------------- //

console.log(digitoVerificador(55555));

                    // ------------------ FUNÇÃO PRINCIPAL ------------------- //
                    function digitoVerificador(clientId) {
                        if (Number.isInteger(clientId)) { // Verificando se o número é um inteiro
                            let result = clientId;
                            let quantDigitos = clientId.toString().length;
                            while (quantDigitos > 1) { // Enquanto houver números com mais de 1 digito, permaneça neste loop
                                clientId_array = transfIntToArray(result);
                                result = 0;
                                clientId_array.map((r) => { // Loop com os digitos do array
                                    result += parseInt(r); // Para somar os digitos, é necessário transforma-los em inteiro com parseInt()
                                });
                                quantDigitos = result.toString().length;
                            }
                            return result;
                        } else {
                            return 'Não é um ID (numero inteiro)';
                        }
                    }
                    // -------- TRANSFORMAR INT EM ARRAY DE STRING ------------ //
                    function transfIntToArray(value) {
                        const value_string = value.toString(); // Transformando em String
                        const value_array = value_string.split(''); // Transformando a String em array
                        return value_array; // Retornando o Array
                    }
