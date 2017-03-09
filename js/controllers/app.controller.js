angular.module('angularNivel1App')
.controller('appCtrl', function($scope) {

    //objeto vazio
    var aluno = {};
// var aluno = new Array();
 
      // objeto com atributos

     var aluno2 = {
         nome: null,
         idade: null,
         sexo:null
     };

     aluno.nome = 'Diego';
     console.log(aluno.nome);
     aluno.telefone = '12345678999';
     console.log(aluno2.telefone);

    //  criar um novo array
     $scope.alunos = [];
     //var alunos = new Array();
     $scope.alunos[5] = aluno2;
     $scope.alunos.push(aluno2);

     var arryPopulado = ['string1', 'string2', 'string3'];

     $scope.alunos = [
         {nome: 'João', idade: 25},
         {nome: 'Maria', idade: 23},
         {nome: 'Manola', idade: 15},
         {nome: 'Ppa', idade: 24}
     ]
});