// bloco de código que desempenha um papel especifico que só será executado quando for chamado 


//EXEMPLO 1 função simples 

function mensagem() { 
    alert("Seja muito bem-vindo(a)!") 
    console.log("Mais uma vez, seja bem-vindo(a)") 

}

mensagem() 

//EXEMPLO 2 função com parâmetros 

function somar (valor1, valor2) { 
    alert(valor1 + valor2) 
}

somar (30, 40)

//EXEMPLO 3 parâmetros de tipos diferentes 

function mensagemPessoal (nome, cargo, anosTrabalhados) { 
    alert(`Seja bem-vindo(a) ${cargo} ${nome}. Estamos felizes por ter voce trabalhando conosco há ${anosTrabalhados} anos. `) 
} 
mensagemPessoal ("Dougras", "Gerente", 10) 
mensagemPessoal("Marcio Marçal ", "The Best Teacher Of All Times (TB TOAT)", 50)

//EXEMPLO 4 o return nas funções

function somarEDevolver(numero1, numero2, numero3) { 
    let resultado = numero1 + numero2 + numero3 
    return resultado 
    }