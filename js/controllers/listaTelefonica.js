angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http) {
    //
    $scope.title = "Lista telefônica";

    $scope.listaDeContatos = [];
    $scope.listaDeOperadoras = [];

    // $scope.listaDeContatos = [
    //   { nome: "Contato A", telefone: "86 999999999" },
    //   { nome: "Contato B", telefone: "86 999999999" },
    //   { nome: "Contato C", telefone: "86 999999999" },
    // ];

    $scope.urlImages = "images/";

    // var urlContatos = 'http://127.0.0.1:5500/backend/contatos.json';
    // var urlContatos = 'https://deploy-node-vercel-bpnivzty5-natanoliveira.vercel.app/contatos';
    // var urlOperadoras = 'https://deploy-node-vercel-bpnivzty5-natanoliveira.vercel.app/operadoras';

    var carregarContatos = function () {
        $http.get(urlContatos).then(sucesso, erro);
        function sucesso(response) {
            // console.log(response);
            $scope.listaDeContatos = response.data;
        }

        function erro(response) {
            // console.log(response);
            $scope.message = 'Erro: ' + response.status + ' - ' + response.statusText;
        }
    }

    var carregarOperadoras = function () {
        $http.get(urlOperadoras).then(sucesso, erro);
        function sucesso(response) {
            // console.log(response);
            $scope.listaDeOperadoras = response.data;
        }

        function erro(response) {
            // console.log(response);
            $scope.message = 'Erro: ' + response.status + ' - ' + response.statusText;
        }
    }

    // $scope.listaDeOperadoras = [
    //   { nome: "OI", codigo: 14, categoria: "Celular", preco:2 },
    //   { nome: "Vivo", codigo: 45, categoria: "Celular", preco:1 },
    //   { nome: "Claro", codigo: 15, categoria: "Celular", preco:3 },
    //   { nome: "GVT", codigo: 15, categoria: "Fixo", preco:1 },
    //   { nome: "Embratel", codigo: 15, categoria: "Fixo", preco:2 },
    // ];

    $scope.adicionarContato = function (contato) {

        if (contato === undefined) {
            return;
        }

        contato.data = new Date();
        // $scope.listaDeContatos.push(contato);
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };

    $scope.removerContatos = function (lista) {
        // console.log(lista);
        $scope.listaDeContatos = lista.filter(function (item) {
            if (!item.selecionado) return item;
        });
    };

    $scope.temSelecionados = function (lista) {
        // console.log(lista);
        return lista.some(function (item) {
            return item.selecionado;
        });
    };

    $scope.ordenarPor = function (campo) {
        $scope.criterioOrdenacao = campo;
        $scope.direcao = !$scope.direcao;
    }

    carregarContatos();
    carregarOperadoras();

});