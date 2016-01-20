angular.module('gera-cnpj').controller('IndexController', ['CNPJService', 'CPFService', function(CNPJService, CPFService) {
    this.CNPJService = CNPJService;
    this.CPFService = CPFService;

    this.cnpj = '';
    this.cpf = '';

    this.novoCnpj = function () {
        this.cnpj = this.CNPJService.geraCnpj();
    };

    this.novoCPF = function () {
        this.cpf = this.CPFService.geraCPF();
    };

    this.init = function () {
        this.novoCnpj();
        this.novoCPF();
    };

    this.init();

    return this;

}]);
