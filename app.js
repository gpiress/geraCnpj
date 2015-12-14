angular.module('gera-cnpj', ['ngclipboard']);

angular.module('gera-cnpj').filter('prettifyCnpj', function () {
    return function (input) {
        if (!input || input.length < 14) {
            return '-';
        }

        var pretty = '';
        pretty += input.slice(0, 2) + '.';
        pretty += input.slice(2, 5) + '.';
        pretty += input.slice(5, 8) + '/';
        pretty += input.slice(8, 12) + '-';
        pretty += input.slice(12, 14);

        return pretty;
    };
});

angular.module('gera-cnpj').filter('prettifyCPF', function () {
    return function (input) {
        if (!input || input.length < 11) {
            return '-';
        }

        var pretty = '';
        pretty += input.slice(0, 3) + '.';
        pretty += input.slice(3, 6) + '.';
        pretty += input.slice(6, 9) + '-';
        pretty += input.slice(9, 11);

        return pretty;
    };
});
