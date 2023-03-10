angular.module('listaTelefonica').factory('contatosAPI', function ($http, config) {
    var _getContatos = function () {
        return $http.get(config.baseURL + "/contatos");
    }

    var _saveContatos = function () {
        return $http.post(config.baseURL + "/contatos");
    }

    return {
        getContatos: _getContatos,
        saveContatos: _saveContatos
    }
})