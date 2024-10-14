//Exercício 1

// Definição da função "calcularex1", que será responsável por calcular e exibir o valor de "xex1"
function calcularex1(){

    //Declaração das variaveis do exercicio 1
    let aex1
    let bex1
    let cex1
    let xex1

    //Obtenção dos valores dos campos de entrada e convertendo-os para números de ponto flutuante
    aex1 = parseFloat(document.getElementById("aex1").value)
    bex1 = parseFloat(document.getElementById("bex1").value)
    cex1 = parseFloat(document.getElementById("cex1").value)
    //Calcula o valor de xex1 utilizando as variáveis convertidas e aplicando a fórmula definida para xex1
    xex1 = (aex1*bex1*(aex1/bex1*(bex1-cex1)))
    // Exibe o valor da variável "xex1" no elemento com id "resex1" presente no arquivo HTML
    document.getElementById("resex1").innerHTML="Resultado:" + xex1
}

//Exercício 2

// Definição da função "calcularex2", que será responsável por calcular e exibir o valor de "aex2"
function calcularex2(){

    //Declaração das variaveis do exercicio 2
    let bmex2
    let bnex2
    let hex2
    let aex2
    const CSTEX2 = 2

    //Obtenção dos valores dos campos de entrada e convertendo-os para números de ponto flutuante
    bmex2 = parseFloat(document.getElementById("bmex2").value)
    bnex2 = parseFloat(document.getElementById("bnex2").value)
    hex2 = parseFloat(document.getElementById("hex2").value)
    //Calcula o valor de "aex2" utilizando as variáveis convertidas e aplicando a fórmula definida para "aex2"
    aex2 = (bmex2+bnex2)*hex2/CSTEX2
    // Exibe o valor da variável "aex2" no elemento com id "resex2" presente no arquivo HTML
    document.getElementById("resex2").innerHTML="Resultado:" + aex2
}

//Exercício 3

// Definição da função "calcularex3", que será responsável por calcular e exibir o valor de "xex3"
function calcularex3(){

    //Declaração das variaveis do exercicio 3
    let aex3
    let bex3
    let cex3
    let xex3
    const CSTEX3 = 2

    //Obtenção dos valores dos campos de entrada e convertendo-os para números de ponto flutuante
    aex3 = parseFloat(document.getElementById("aex3").value)
    bex3 = parseFloat(document.getElementById("bex3").value)
    cex3 = parseFloat(document.getElementById("cex3").value)
    //Calcula o valor de "xex3" utilizando as variáveis convertidas e aplicando a fórmula definida para "xex3"
    xex3 = (aex3**CSTEX3)+(bex3**CSTEX3)+cex3
    // Exibe o valor da variável "xex3" no elemento com id "resex3" presente no arquivo HTML
    document.getElementById("resex3").innerHTML="Resultado:" + xex3
}

//Exercício 4

// Definição da função "calcularex4", que será responsável por calcular e exibir o valor de "xex4"
function calcularex4(){

    //Declaração das variaveis do exercicio 4
    let n1ex4
    let n2ex4
    let n3ex4
    let xex4
    const cstex4 = 3

    //Obtenção dos valores dos campos de entrada e convertendo-os para números de ponto flutuante
    n1ex4 = parseFloat(document.getElementById("n1ex4").value)
    n2ex4 = parseFloat(document.getElementById("n2ex4").value)
    n3ex4 = parseFloat(document.getElementById("n3ex4").value)
    //Calcula o valor de "xex4" utilizando as variáveis convertidas e aplicando a fórmula definida para "xex4"
    xex4 = (n1ex4+n2ex4+n3ex4)/cstex4
    // Exibe o valor da variável "xex4" no elemento com id "resex4" presente no arquivo HTML
    document.getElementById("resex4").innerHTML="Resultado:" + xex4
}

//Exercício 5

// Definição da função "calcularex5", que será responsável por calcular e exibir o valor de "xex5"
function calcularex5(){

    //Declaração das variaveis do exercicio 5
    let aex5
    let bex5
    let xex5
    const cst1ex5 = 3
    const cst2ex5 = 2

    //Obtenção dos valores dos campos de entrada e convertendo-os para números de ponto flutuante
    aex5 = parseFloat(document.getElementById("aex5").value)
    bex5 = parseFloat(document.getElementById("bex5").value)
    //Calcula o valor de "xex5" utilizando as variáveis convertidas e aplicando a fórmula definida para "xex5"
    xex5 = (aex5**cst1ex5)+(bex5**cst2ex5)
    // Exibe o valor da variável "xex5" no elemento com id "resex5" presente no arquivo HTML
    document.getElementById("resex5").innerHTML = "Resultado:" + xex5
}