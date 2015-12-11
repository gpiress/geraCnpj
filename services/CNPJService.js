angular.module('gera-cnpj').service('CNPJService', function () {

    this.geraCnpj = function () {
        var tempCnpj = this.geraPrimeirosDoze();

        var primeiroVerificador = this.geraPrimeiroVerificador(tempCnpj);

        tempCnpj += (primeiroVerificador + '');

        var segundoVerificador = this.geraSegundoVerificador(tempCnpj);

        tempCnpj += (segundoVerificador + '');

        return tempCnpj;
    };

    this.geraPrimeirosDoze = function () {
        var cnpj = '';

        for (var i = 0; i < 12; i++) {
            var digito = Math.floor(Math.random() * 10);
            cnpj += (digito + '');
        }

        return cnpj;
    }

    this.geraPrimeiroVerificador = function (cnpj) {
        if (cnpj.length < 12) {
            return -1;
        }

        var soma = calculaSomaCnpj(cnpj);

        var resto = soma % 11;

        if (resto < 2) {
            return 0;
        }

        return 11 - resto;
    };

    this.geraSegundoVerificador = function (cnpj) {
        if (cnpj.length < 13) {
            return -1;
        }

        var soma = calculaSomaCnpj(cnpj);

        var resto = soma % 11;

        if (resto < 2) {
            return 0;
        }

        return 11 - resto;
    }

    function calculaSomaCnpj(cnpj) {
        var soma = 0;

        var primeiroLimite = 4;
        if (cnpj.length === 13) {
            primeiroLimite = 5;
        }

        for (var i = 0; i < primeiroLimite; i++) {
            var peso = primeiroLimite + 1;
            var digito = parseInt(cnpj[i]);
            soma += ((peso - i) * digito);
        }

        for (var i = 0; i < 8; i++) {
            var digito = parseInt(cnpj[primeiroLimite + i]);
            soma += ((9 - i) * digito);
        }

        return soma;
    }

    return this;

});
