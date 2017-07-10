(function () {
  'use strict';

  describe('Calculator', function () {
    describe('same math operations', function () {
      var Calc = new Calculator;
      it('should add two numbers and return the sum of them', function () {
        expect(Calc.sum([2,4])).to.equal(6);
      });
      it('should substract two numbers and return the difference of them', function () {
        expect(Calc.substract([9,4])).to.equal(5);
      });
      it('should multiply two numbers and return the result', function () {
        expect(Calc.multiply([2,6])).to.equal(12);
       });
       it('should divide two numbers and return the result', function () {
         expect(Calc.divide([24,8])).to.equal(3);
       });
       it('should add three numbers and return the sum of them', function () {
         expect(Calc.sum([2,4,3])).to.equal(9);
       });
    });
  });
})();
