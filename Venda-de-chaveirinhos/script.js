//Valor do produto
var valorProduto= 10;

//Valor/preço retornado
var valor= document.querySelector("#valorEntregue");
var troco= document.querySelector("#troco");

function calc() {
    //se valor dado for maior que o valor do produto
    if(valor.valueAsNumber > valorProduto){
  //Retornando o troco da compra
  var resto = valor.valueAsNumber - valorProduto;
  return troco.textContent = "Troco: " + resto;
  }
  else{
    return troco.textContent = "Troco: " + 0;
  }
}