angular.module('gera-cnpj').controller('IndexController', ['$scope', 'CNPJService', function($scope, CNPJService) {
    this.CNPJService = CNPJService;
    this.cnpj = '';

    this.novoCnpj = function () {
        this.cnpj = this.CNPJService.geraCnpj();
    }

    this.novoCnpj();

    return this;

}]);
