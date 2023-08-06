/* Salvar Nome */
function Salvar() {
    let nome = document.getElementById('nome').value

    localStorage.setItem('nome', nome)

    alert('Nome Salvo Com Sucesso!')

    location.reload()
}

/* Pegar o Nome Do localstrorage */
let temNome = localStorage.getItem('nome')

/* Ver se já existe um nome no localstrorage, caso tiver ir para Primeira Aba*/
if (temNome === '') {
    console.log('não tem nome')
} else if (temNome === temNome) {
    let abaNomeDoAulo = document.getElementById('abaNomeDoAulo')
    let PrimeiraAba = document.getElementById('PrimeiraAba')

    abaNomeDoAulo.style.display = 'none'
    PrimeiraAba.style.display = 'flex'
}

/* Colocar o nome no bem vindo da Primeira Aba*/

let h1 = document.getElementById('TituloPrimeiraAba')

h1.innerHTML = 'Bem Vindo(a): ' + temNome

/* Mudar De aba para ir para aba 2*/

function Começar() {
    let PrimeiraAba = document.getElementById('PrimeiraAba')
    let SegundaAba = document.getElementById('SegundaAba')

    PrimeiraAba.style.display = 'none'
    SegundaAba.style.display = 'flex'
}

/* Calcular */

function Calcular() {
    let PrimeiraAba = document.getElementById('PrimeiraAba')
    let SegundaAba = document.getElementById('SegundaAba')
    let Resumo = document.getElementById('Resumo')

    PrimeiraAba.style.display = 'none'
    SegundaAba.style.display = 'none'
    Resumo.style.display = 'flex'

    let Salario = document.getElementById('Salario').value
    let Supermecado = document.getElementById('Supermecado').value
    let Luz = document.getElementById('Luz').value
    let Agua = document.getElementById('Agua').value
    let Internet = document.getElementById('Internet').value
    let Internet2 = document.getElementById('Internet/Celular').value
    let Aluguel = document.getElementById('Aluguel').value
    let Credito = document.getElementById('Credito').value

    let sobra = parseInt(Salario - Supermecado - Luz - Agua - Internet - Internet2 - Aluguel - Credito)

    let investir = sobra * 0.50;
    let lazer = sobra - investir;

    let sobra2 = document.getElementById('sobra')
    let Investir2 = document.getElementById('Investir')
    let lazer2 = document.getElementById('lazer')

    sobra2.innerHTML = 'Está Sobrando Do Seu Salário: ' + sobra + ' Reais' 
    Investir2.innerHTML = 'Você pode Invetir: ' + investir + ' Reais'
    lazer2.innerHTML = 'Você pode usar em Lazer: ' + lazer + ' Reais'
}


function CalcularNovamente() {
    let PrimeiraAba = document.getElementById('PrimeiraAba')
    let SegundaAba = document.getElementById('SegundaAba')
    let Resumo = document.getElementById('Resumo')

    PrimeiraAba.style.display = 'none'
    SegundaAba.style.display = 'flex'
    Resumo.style.display = 'none'
}

















