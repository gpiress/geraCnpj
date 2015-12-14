describe('Gera CNPJ Service', function () {

    var validCNPJs = [
        { random: '915752670001', first: 6, second: 2 },
        { random: '616667180001', first: 0, second: 6 },
        { random: '326395110001', first: 4, second: 4 },
    ];

    var CNPJService;

    beforeEach(module('gera-cnpj'));

    beforeEach(inject(function (_CNPJService_) {
        CNPJService = _CNPJService_;
    }));

    it('should compute the correct first digit validator', function () {
        for (var i = 0; i < validCNPJs.length; i++) {
            var currentCNPJ = validCNPJs[i];

            var firstDigit = CNPJService.geraPrimeiroVerificador(currentCNPJ.random);

            expect(firstDigit).toEqual(currentCNPJ.first);
        }
    });

    it('should compute the correct second digit validator', function () {
        for (var i = 0; i < validCNPJs.length; i++) {
            var currentCNPJ = validCNPJs[i];
            var partialCNPJ = currentCNPJ.random + currentCNPJ.first;

            var secondDigit = CNPJService.geraSegundoVerificador(partialCNPJ);

            expect(secondDigit).toEqual(currentCNPJ.second);
        }
    });

});
