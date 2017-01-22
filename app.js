(function () {
  'use strict';



  //objetos
  // var shoppingList2 = [
  // {
  //   name: "Milk",
  //   quantity: "2"
  // },
  // {
  //   name: "Donuts",
  //   quantity: "200"
  // },
  // {
  //   name: "Cookies",
  //   quantity: "300"
  // },
  // {
  //   name: "Chocolate",
  //   quantity: "5"
  // }
  // ];

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListService', ShoppingListService);


  ToBuyController.$inject = ['ShoppingListService'];

  function ToBuyController(ShoppingListService) {
    var showList = this;

    //AQUI DEFINI O NOME DA VARÍAVEL COMO this.items
    showList.items = ShoppingListService.getItems();

    //AQUI ESTOU REMOVENDO OS ITENS DO PRIMEIRO ARRAY PASSANDO O INDEX
    showList.removeItem =  function (index) {
      ShoppingListService.removeItem(index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListService'];

  function AlreadyBoughtController(ShoppingListService) {
    showList.itemsComprados = ShoppingListService.getCompras();
  }


//ISTO SERVER PARA COMPARTILHAR INFORMAÇÃO ENTRE CONTROLLERS
function ShoppingListService() {
  var service = this;
 // Está variável estou utilizando para adicionar os itens que estão sendo removidos
 var itemsComprados = [];

 var items = [
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



//AQUI RETORNA TODOS OS ITENS PARA O CONTROLLER QUE O CHAMAR definido o nome como this.GetItems
service.getItems = function () {
  return items;
};

//AQUI RETORNA TODOS OS ITENS PARA O CONTROLLER QUE O CHAMAR definido o nome como this.GetItems
service.getCompras = function () {
  return itemsComprados;
};

//AQUI ELE REMOVE ITEM DO ARRAY E DEFINIDO O NOME COMO this.removeItem
service.removeItem = function (itemIndex) {
   itemsComprados =  items.splice(itemIndex, 1); //aqui ele pega o index que foi recebido como parâmetro e remove somente 1 item
 };

 service.addItem = function (array) {
  items.push(array);
};

}
})();
