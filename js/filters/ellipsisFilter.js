angular.module('listaTelefonica').filter('ellipsis', function () {

    return function (input, size) {
        // console.log(input.length + ' - tam: ' + size);
        // if (input !== undefined) {
        if (input.length <= size) return input;
        var output = input.substring(0, (size || 2)) + '...';
        return output;
        // }

    };
});