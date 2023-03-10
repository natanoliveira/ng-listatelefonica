angular.module('listaTelefonica').filter('name', function (config) {

    // console.log(config.verbosLigacao);

    // Precisamos dividir e tratar os itens da lista
    return function (input) {

        var fragmentos = input.split(" ");

        if (fragmentos.length > 1) {
            // console.log('entrou para pegar o carinha multiplo');
            // console.log(fragmentos);
            var uniaoTrabalhada = fragmentos.map(function (nome) {
                if (nome.length >= 2) {
                    // Utilizando expressão regular para verificar ual o verbo de ligação do nome
                    // Retorna se estiver de acordo com o parametro 
                    if (/(da|de|do|das|dos)/.test(nome)) return nome;
                    return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
                }
                return uniaoTrabalhada.join(" ");
            });
        } else {
            return input;
        }

    }
});