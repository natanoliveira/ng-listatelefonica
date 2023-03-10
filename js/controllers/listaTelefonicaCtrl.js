angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, sequencialGenerator) {
    //
    // console.log(sequencialGenerator.generate());

    $scope.title = "Lista telefônica";

    $scope.listaDeContatos = [];
    $scope.listaDeOperadoras = [];

    // $scope.listaDeContatos = [
    //   { nome: "Contato A", telefone: "86 999999999" },
    //   { nome: "Contato B", telefone: "86 999999999" },
    //   { nome: "Contato C", telefone: "86 999999999" },
    // ];

    $scope.urlImages = "images/";

    var carregarContatos = function () {

        contatosAPI.getContatos().then(successAPI, errorAPI);
        function successAPI(response) {
            $scope.listaDeContatos = response.data;
        }
        function errorAPI(response) {
            $scope.message = response.statusText;
        };
    }

    var carregarOperadoras = function () {

        operadorasAPI.getOperadoras().then(successAPI, errorAPI);
        function successAPI(response) {
            $scope.listaDeOperadoras = response.data;
        }
        function errorAPI(response) {
            $scope.message = response.statusText;
        }
    }

    $scope.adicionarContato = function (contato) {

        if (contato === undefined) {
            return;
        }

        contato.sequencial = sequencialGenerator.generate();
        contato.data = new Date();
        // contato.nome = contato.nome.toUpperCase();

        contatosAPI.saveContatos(contato).then(successAPI, errorAPI);

        function successAPI(response) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        }
        function errorAPI(response) {
            $scope.message = response.statusText;
        }

    };

    $scope.removerContatos = function (lista) {

        // console.log(lista);
        // $scope.listaDeContatos = lista.filter(function (item) {
        //     if (!item.selecionado) return item;
        // });

        var listaComMarcados = lista.filter(function (item) {
            if (item.selecionado) return item;
        });

        console.log(listaComMarcados);

        // contatosAPI.deleteContatos(listaComMarcados).then(successAPI, errorAPI);

        // function successAPI(response) {
        //     carregarContatos();
        // }
        // function errorAPI(response) {
        //     $scope.message = response.statusText;
        // }
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