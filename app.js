(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListService', ShoppingListService);


  ToBuyController.$inject = ['ShoppingListService'];

  function ToBuyController(ShoppingListService) {
    var aComprar = this;

    //AQUI DEFINI O NOME DA VARÍAVEL COMO this.items
    aComprar.itemsAComprar = ShoppingListService.getItems();

    //AQUI ESTOU REMOVENDO OS ITENS DO PRIMEIRO ARRAY PASSANDO O INDEX
    aComprar.buyItem =  function (index) {
      ShoppingListService.buyItem(index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListService'];

  function AlreadyBoughtController(ShoppingListService) {
    var itemsComprados = this;
    itemsComprados.items = ShoppingListService.getCompras();
  }


//ISTO SERVER PARA COMPARTILHAR INFORMAÇÃO ENTRE CONTROLLERS
function ShoppingListService() {
  var service = this;
 // Está variável estou utilizando para adicionar os itens que estão sendo removidos


 var itemsParaComprar = [
 {
  name: "Milk",
  quantity: "2"
},
{
  name: "Donuts",
  quantity: "2"
},
{
  name: "Cookies",
  quantity: "3"
},
{
  name: "Chocolate",
  quantity: "5"
},
{
  name: "Jamon",
  quantity: "10"
}
];

var itemsComprados = [];


//AQUI RETORNA TODOS OS ITENS PARA O CONTROLLER QUE O CHAMAR definido o nome como this.GetItems
service.getItems = function () {
  return itemsParaComprar;
};

//AQUI RETORNA TODOS OS ITENS PARA O CONTROLLER QUE O CHAMAR definido o nome como this.GetItems
service.getCompras = function () {
  return itemsComprados;
};

//AQUI ELE REMOVE ITEM DO ARRAY E DEFINIDO O NOME COMO this.removeItem
service.buyItem = function (itemIndex) {
   var item = itemsParaComprar.splice(itemIndex, 1)[0]; //aqui ele pega o index que foi recebido como parâmetro e remove somente 1 item
   itemsComprados.push({
    name: item.name,
    quantity: item.quantity,
  })
 };
}
})();
