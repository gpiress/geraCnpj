describe('CPFService', function () {
    var validCPFs = [
        { random: '125221017', first: 5, second: 7 },
    ];

    var CPFService;

    beforeEach(module('gera-cnpj'));

    beforeEach(inject(function (_CPFService_) {
        CPFService = _CPFService_;
    }));

    it('should generate 2 different CPFs when asked 2 times', function () {
        var umCPF = CPFService.geraCPF();
        var doisCPF = CPFService.geraCPF();

        expect(umCPF).not.toEqual(doisCPF);
    });

    describe('Validators', function () {
        it('should compute the right first digit validator', function () {
            for (var i = 0; i < validCPFs.length; i++) {
                var currentCPF = validCPFs[i];

                var primeiroDigito = CPFService.calculaDigito(currentCPF.random);

                expect(primeiroDigito).toEqual(currentCPF.first);
            }
        });

        it('should compute the right second digit validator', function () {
            for (var i = 0; i < validCPFs.length; i++) {
                var currentCPF = validCPFs[i];
                var partialCPF = currentCPF.random + currentCPF.first;

                var segundoDigito = CPFService.calculaDigito(partialCPF);

                expect(segundoDigito).toEqual(currentCPF.second);
            }
        });

        it('should return -1 when an invalid partialCPF is input', function () {
            var digito = CPFService.calculaDigito('123');

            expect(digito).toEqual(-1);
        });

        it('should generate 2 verifying digits when asked a new CPF', function () {
            spyOn(CPFService, 'calculaDigito');

            var novoCPF = CPFService.geraCPF();

            expect(CPFService.calculaDigito.calls.count()).toEqual(2);
        });
    });

    describe('Partial CPF', function () {
        it('should generate a 9-length number-only string', function () {
            var parcial = CPFService.geraCPFParcial();

            expect(parcial.length).toEqual(9);

            var isNan = isNaN(parcial);
            expect(isNan).toBe(false);
        });
    });
});
