describe('IndexController', function () {

    var indexController;

    beforeEach(module('gera-cnpj'));

    describe('CNPJ provider', function () {
        var CNPJServiceMock;

        beforeEach(function () {
            CNPJServiceMock = {
                geraCnpj: function () {
                    return "novo cnpj";
                }
            };

            module(function($provide) {
                $provide.value('CNPJService', CNPJServiceMock);
            });

            inject(function (_$controller_) {
                indexController = _$controller_('IndexController');
            });
        });

        it('should ask the service for a new CNPJ', function () {
            spyOn(CNPJServiceMock, 'geraCnpj');

            indexController.novoCnpj();

            expect(CNPJServiceMock.geraCnpj).toHaveBeenCalled();
        });

        it('should update the CNPJ to the one informed by the service', function () {
            indexController.novoCnpj();

            expect(indexController.cnpj).toEqual('novo cnpj');
        });
    });

    describe('CPF provider', function () {
        var CPFServiceMock;

        beforeEach(function () {
            CPFServiceMock = {
                geraCPF: function () {
                    return "novo cpf";
                }
            };

            module(function($provide) {
                $provide.value('CPFService', CPFServiceMock);
            });

            inject(function (_$controller_) {
                indexController = _$controller_('IndexController');
            });
        });

        it('should ask the CPFService for a new CPF', function () {
            spyOn(CPFServiceMock, 'geraCPF');

            indexController.novoCPF();

            expect(CPFServiceMock.geraCPF).toHaveBeenCalled();
        });

        it('should update the CPF with the one the service provided', function () {
            indexController.novoCPF();

            expect(indexController.cpf).toEqual('novo cpf');
        });
    });
});
