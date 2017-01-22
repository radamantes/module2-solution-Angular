(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListService', ShoppingListService);


  ToBuyController.$inject = ['ShoppingListService'];
  AlreadyBoughtController.$inject = ['ShoppingListService'];


  function ToBuyController(ShoppingListService) {
<<<<<<< HEAD
    var paraComprar = this;

    //AQUI DEFINI O NOME DA VARÍAVEL COMO this.itemsAComprar e estou adicionando os itens na lista
    paraComprar.itemsAComprar = ShoppingListService.getItemsToBuy();

    paraComprar.buyItem =  function (indexFromForm) {
      ShoppingListService.buyItem(indexFromForm);
=======
    var aComprar = this;

    //AQUI DEFINI O NOME DA VARÍAVEL COMO this.items
    aComprar.itemsAComprar = ShoppingListService.getItems();

    //AQUI ESTOU REMOVENDO OS ITENS DO PRIMEIRO ARRAY PASSANDO O INDEX
    aComprar.buyItem =  function (index) {
      ShoppingListService.buyItem(index);
>>>>>>> 14ed9ee603f7e5315b36d8941afca26e1d3f3ece
    };
  }
  

  function AlreadyBoughtController(ShoppingListService) {
    var itemsComprados = this;
    itemsComprados.items = ShoppingListService.getCompras();
  }


//ISTO SERVER PARA COMPARTILHAR INFORMAÇÃO ENTRE CONTROLLERS
function ShoppingListService() {
  var service = this;
<<<<<<< HEAD

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
=======
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
>>>>>>> 14ed9ee603f7e5315b36d8941afca26e1d3f3ece
  return itemsParaComprar;
};

//AQUI RETORNA TODOS OS ITENS PARA O CONTROLLER QUE O CHAMAR definido o nome como this.GetItems
service.getCompras = function () {
  return itemsComprados;
};

//AQUI ELE REMOVE ITEM DO ARRAY E DEFINIDO O NOME COMO this.removeItem
service.buyItem = function (itemIndex) {
<<<<<<< HEAD
  var item = itemsParaComprar[itemIndex];
  itemsParaComprar.splice(itemIndex,1);
  itemsComprados.push(item);
};
=======
   var item = itemsParaComprar.splice(itemIndex, 1)[0]; //aqui ele pega o index que foi recebido como parâmetro e remove somente 1 item
   itemsComprados.push({
    name: item.name,
    quantity: item.quantity,
  })
 };
>>>>>>> 14ed9ee603f7e5315b36d8941afca26e1d3f3ece
}
})();
