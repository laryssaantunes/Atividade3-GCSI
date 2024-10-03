// 2. Função para somar dois números
function Somarnumeros() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const re = num1 + num2;

    document.getElementById('resultadosSoma').innerHTML  = "Resultado: " + re;
}

// 3. Função para calcular a média de 4 notas
function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    const status = media >= 7 ? "Aprovado" : "Reprovado";

    document.getElementById('resultadoMedia').innerHTML = `Média: ${media} - ${status}`;
}

// 5. Função para mostrar a tabuada de um número
function mostrarTabuada() {
    const numero = parseInt(document.getElementById('numerodatabuada').value);
    let resultado = "";

    for (let i = 0; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }

    document.getElementById('resultadodatabuada').innerHTML = resultado;
}

// 6. Função para encontrar o maior entre três valores
function maiorValor() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const valor3 = parseFloat(document.getElementById('valor3').value);

    const maior = Math.max(valor1, valor2, valor3);

    document.getElementById('resultadoMaior').innerHTML = `O maior valor é: ${maior}`;
}

// 7. Função para imprimir números ímpares de um vetor
function imprimirImpares() {
    const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const impares = vetor.filter(num => num % 2 !== 0);

    document.getElementById('resultadoImpares').innerHTML = `Ímpares: ${impares.join(", ")}`;
}

// 8. Função para inverter o nome
function nomeContrario() {
    const nome = document.getElementById('nome').value;
    const nomeInvertido = nome.split("").reverse().join("");

    document.getElementById('resultadoNome').innerHTML = `Nome invertido: ${nomeInvertido}`;
}

// 9. Função para mostrar funcionários que ganham mais do que o salário mínimo
function filtrarFuncionarios() {
    const funcionarios = [
        { nome: "laryssa", idade: 25, sexo: "F", salario: 1200 },
        { nome: "Ana", idade: 30, sexo: "F", salario: 950 },
        { nome: "João", idade: 22, sexo: "M", salario: 1300 },
        { nome: "Paula", idade: 28, sexo: "F", salario: 700 },
        { nome: "Bruno", idade: 35, sexo: "M", salario: 1500 }
    ];

    const salarioMinimo = 1100;
    const filtrados = funcionarios.filter(f => f.salario > salarioMinimo);

    const resultado = filtrados.map(f => `Nome: ${f.nome}, Salário: ${f.salario}`).join("<br>");
    document.getElementById('resultadoFuncionarios').innerHTML = resultado;
}
