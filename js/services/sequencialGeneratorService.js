angular.module('listaTelefonica').provider('sequencialGenerator', function (config) {

    // var _length = 36;

    this.getLength = function () {
        return _length
    };

    this.setlength = function (length) {
        _length = length
    };

    this.$get = function () {
        return {
            generate: function () {
                // var sequencial = '';

                // while (sequencial < _length) {
                //     sequencial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                // }

                sequencial = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });

                return sequencial;
            }
        }
    }
});