const resposta = document.querySelector('.answer');
const tempo = document.querySelector('#tempo');
const limite = document.querySelector('#limite');
const numero = document.querySelector('#numeroN');
const vetorNumeros = document.querySelector('#vetorNumeros');
/**
 * Esta é uma função que retorna o inverso no numero informado.
 * 
 * @example 
 *   reverso(305); // 503
 * 
 * @param   {Number} obrigatorio   Parametro obrigatório
 * @returns {String}
 */
function reverso(n) {
    let arr = String(n).split("");
    arr.reverse();
    return arr.join("");
}

/**
 * Esta é uma função que ira verificar a soma do numero mais seu inverso e
 * adicionar na tela a resposta contendo todos os valores.
 * 
 * @example 
 *   verificarSoma(); //  * 
 */
function verificarSoma() {
    let n = 1;
    let nReverso = reverso(n);
    let soma = n + parseInt(nReverso);
    let arr = [];
    while (n < 1000000) {
        if (isImpar(soma) && nReverso.charAt(0) != '0' && soma < 1000000) {
            arr.push(n);
        }
        n = n + 1;
        nReverso = reverso(n);
        soma = n + parseInt(nReverso);
    }
    console.log(arr.length)
    resposta.innerHTML = "<p class='numbers'>Resposta:" + arr + "</p>"
}

/**
 * Esta é uma função que retorna true caso a soma informada seja impar, e false caso seja par
 * 
 * @example 
 *   isImpar(305); // true
 * 
 * @param   {Number} obrigatorio   Parametro obrigatório
 * @returns {Boolean}
 */
function isImpar(sum) {
    if (sum % 2 == 0)
        return false
    return true;

}

/**
 * Esta é uma função que verificar a quantidade de alunos e indica na tela se a aula sera normal ou
 * se sera cancelada.
 * 
 * @example 
 *   validar(); //
 */
function validar() {
    let x = parseInt(limite.value)
    let arr = tempo.value.replaceAll(" ", "").split(",");
    let contador = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            contador++;
        }
    }
    if (contador >= x) {
        resposta.innerHTML = "<p class='numbers'>Resposta: Aula Normal </p>"
    } else {
        resposta.innerHTML = "<p class='numbers'>Resposta: Aula Cancelada </p>"
    }
}

/**
 * Esta é uma função que retorna a soma dos valores do vetor informada.
 * 
 * @example 
 *   somarVetor([2,3,4]); // 9
 * 
 * @param   {Number} obrigatorio   Parametro obrigatório
 * @returns {Number}
 */
function somarVetor(vet) {
    let soma = 0;
    vet.forEach(element => {
        soma += element;
    });
    return soma;
}

/**
 * Esta é uma função que converte e ordena os valores de um array e o retorna 
 * 
 * @example 
 *   convertAndSort(['3','2','4']); // [2,3,4]
 * 
 * @param   {String} obrigatorio   Parametro obrigatório
 * @returns {Number}
 */
function convertAndSort(arr) {
    arrOfNum = [];
    arr.forEach(str => {
        arrOfNum.push(Number(str));
    });
    arrOfNum.sort((a, b) => a - b);
    return arrOfNum;
}
/**
 * Esta é uma função que verifica as combinaçoes dos vetores e indica na tela os menores vetores
 * correspondentes.
 * 
 * @example 
 *   determinarMenoresVetores(); // 
 * 
 */
function determinarMenoresVetores() {
    let n = parseInt(numero.value)
    let arrOfNum = convertAndSort(vetorNumeros.value.replaceAll(" ", "").split(",")).reverse();
    let vetores = gerarcombinacoes(arrOfNum,parseInt(n/arrOfNum[0]));
    let texto = "";
    let menorTamanho = Infinity;
    for (let i = 0; i < vetores.length; i++) {
        if (somarVetor(vetores[i]) == n) {
            if(!texto.includes(vetores[i].sort().toString()) && vetores[i].length == menorTamanho){
                texto += "["+vetores[i].sort().toString() +"]"+ "<br>";
            }else if(!texto.includes(vetores[i].sort().toString()) && vetores[i].length < menorTamanho){
                texto = "["+vetores[i].sort().toString() +"]"+ "<br>";
                menorTamanho = vetores[i].length;
            }
        }
    }
    resposta.innerHTML = "<p class='numbers'>Resposta:<br>"+texto+"</p>";
    

}

/**
 * Esta é uma função retorna todas as combinações conforme os valores do vetor informado
 * 
 * @example 
 *   gerarcombinacoes([3,2],4); // [2,2],[2,3]
 * 
 * @param   {Number} obrigatorio   Parametro obrigatório
 * @param   {NUmber} obrigatorio   Parametro obrigatório
 * @returns {Number}
 */
function gerarcombinacoes(arr,x) {
    const result = [];
    const tamanho = x+1;
  
    const combinacoes = (n, m = []) => {
      if (n > 0) {
        for (var i = 0; i < tamanho; i++) {
          const value = combinacoes(n - 1, [...m,arr[i]]);
          result.push(value);
        }
      }
      return m;
    }
    combinacoes(tamanho);
    return result;
}