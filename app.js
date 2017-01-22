(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListService', ShoppingListService);


  ToBuyController.$inject = ['ShoppingListService'];
  AlreadyBoughtController.$inject = ['ShoppingListService'];


  function ToBuyController(ShoppingListService) {
    var paraComprar = this;

    //AQUI DEFINI O NOME DA VARÍAVEL COMO this.itemsAComprar e estou adicionando os itens na lista
    paraComprar.itemsAComprar = ShoppingListService.getItemsToBuy();

    paraComprar.buyItem =  function (indexFromForm) {
      ShoppingListService.buyItem(indexFromForm);
    };
  }
  

  function AlreadyBoughtController(ShoppingListService) {
    var itemsComprados = this;
    itemsComprados.items = ShoppingListService.getCompras();
  }


//ISTO SERVER PARA COMPARTILHAR INFORMAÇÃO ENTRE CONTROLLERS
function ShoppingListService() {
  var service = this;

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

 // Está variável estou utilizando para adicionar os itens que estão sendo removidos
 var itemsComprados = [];


//AQUI RETORNA TODOS OS ITENS PARA O CONTROLLER QUE O CHAMAR definido o nome como this.GetItems
service.getItemsToBuy = function () {
  return itemsParaComprar;
};

//AQUI RETORNA TODOS OS ITENS PARA O CONTROLLER QUE O CHAMAR definido o nome como this.GetItems
service.getCompras = function () {
  return itemsComprados;
};

//AQUI ELE REMOVE ITEM DO ARRAY E DEFINIDO O NOME COMO this.removeItem
service.buyItem = function (itemIndex) {
  var item = itemsParaComprar[itemIndex];
  itemsParaComprar.splice(itemIndex,1);
  itemsComprados.push(item);
};
}
})();
