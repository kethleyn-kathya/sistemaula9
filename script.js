let SaldoInicial = prompt(`Digite aqui o seu saldo`)
SaldoInicial = parseInt(SaldoInicial)

let ValorDaCompra = prompt(`Digite aqui qual o valor da sua compra.
Lembre-se: Se for um número decimal, coloque um ponto final (.) ao invés de uma vírgula (,).`)
ValorDaCompra = parseFloat(ValorDaCompra)

let resultado = final (SaldoInicial, ValorDaCompra)

function final (SaldoInicial, ValorDaCompra) {
    return SaldoInicial - ValorDaCompra 
   }
   
 console.log(resultado);
  
if (SaldoInicial > ValorDaCompra) {
alert(' Parabéns! Tudo ocorreu corretamente com o pagamento da sua compra. Agora o seu saldo é ' + resultado )
}
else if (SaldoInicial < ValorDaCompra) 
alert('Ooops! O seu saldo é insuficiente.');
