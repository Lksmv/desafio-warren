const resposta = document.querySelector('.answer');
const temporarioos = document.querySelector('#temporarioo');
const limite = document.querySelector('#limite');
const numero = document.querySelector('#numeroN');
const vetorNumeros = document.querySelector('#vetorNumeros');

function reverso(n) {
    let arr = String(n).split("");
    arr.reverse();
    return arr.join("");
}

function verificarSoma() {
    let n = 1;
    let nReverso = reverso(n);
    let soma = n + parseInt(nReverso);
    let arr = [];
    while (n < 1000000) {
        if (isImpar(soma) && nReverso.charAt(0) != '0' && soma < 1000000) {
            console.log(n + ' + ' + nReverso + " = " + soma);
            arr.push(n);

        }
        n = n + 1;
        nReverso = reverso(n);
        soma = n + parseInt(nReverso);
    }
    console.log(arr.length)
    resposta.innerHTML = "<p class='numbers'>Resposta:" + arr + "</p>"
}

function isImpar(sum) {
    if (sum % 2 == 0)
        return false
    return true;

}

function validar() {
    let x = parseInt(limite.value)
    let arr = temporarioos.value.replaceAll(" ", "").split(",");
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

function somarVetor(vet) {
    let soma = 0;
    vet.forEach(element => {
        soma += element;
    });
    return soma;
}

function distanciaObj(num, obj) {
    if (obj > num) {
        return obj - num;
    } else {
        return num - obj;
    }
}

function convertAndSort(arr) {
    arrOfNum = [];
    arr.forEach(str => {
        arrOfNum.push(Number(str));
    });
    arrOfNum.sort((a, b) => a - b);
    return arrOfNum;
}

function determinarMenoresVetores() {
    let n = parseInt(numero.value)
    let arrOfNum = convertAndSort(vetorNumeros.value.replaceAll(" ", "").split(",")).reverse();
    console.log(arrOfNum)
    let vetores = gerarcombinacoes(arrOfNum);
    let resposta = "";
    for (let i = 0; i < vetores.length; i++) {
        if (somarVetor(vetores[i]) == n) {
            if(!resposta.includes(vetores[i].sort().toString())){
                resposta += "["+vetores[i].sort().toString() +"]"+ "<br>";
                console.log(resposta);
            }
        }
    }
    resposta.innerHTML = "<p style='color:red' class='numbers'>Resposta:"+"aaa"+resposta+"</p>";
    

}

function gerarcombinacoes(arr) {
    const result = [];
    const tamanho = arr.length;
  
    const combinacoes = (x, n, m = []) => {
      if (n > 0) {
        for (var i = 0; i < tamanho; i++) {
          const value = combinacoes(x, n - 1, [...m,arr[i]]);
          result.push(value);
        }
      }
      return m;
    }
    combinacoes(arr.length,tamanho);
  
    return result;
}

determinarMenoresVetores();
//determinarMenoresVetores();