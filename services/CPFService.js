angular.module('gera-cnpj').service('CPFService', function () {
    this.geraCPF = function () {
        var cpf = this.geraCPFParcial();

        var primeiroVerificador = this.calculaDigito(cpf);
        cpf += primeiroVerificador;

        var segundoVerificador = this.calculaDigito(cpf);
        cpf += segundoVerificador;

        return cpf;
    };

    this.geraCPFParcial = function () {
        var parcial = '';

        for (var i = 0; i < 9; i++) {
            var digito = Math.floor(Math.random() * 10);
            parcial += digito;
        }

        return parcial;
    };

    this.calculaDigito = function (partialCPF) {
        if (partialCPF.length < 9) {
            return -1;
        }

        var soma = 0;

        var teto = partialCPF.length + 1;

        for (var i = teto; i > 1; i--) {
            var indice = teto - i;
            var digito = parseInt(partialCPF[indice]);

            soma += (digito * i);
        }

        var resto = soma % 11;

        if (resto < 2) {
            return 0;
        }

        return 11 - resto;
    };

    return this;
});
