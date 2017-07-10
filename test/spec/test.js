(function () {
  'use strict';

  describe('Calculator', function () {
    describe('same math operations', function () {
      it('should add two numbers and return the sum of them', function () {
        expect(add(2,4)).to.equal(6);
      });
      it('should substract two numbers and return the difference of them', function () {
        expect(subtract(9,4)).to.equal(5);
      });
      it('should multiply two numbers and return the result', function () {
        expect(multiply(2,6)).to.equal("12.00");
       });
       it('should divide two numbers and return the result', function () {
         expect(divide(24,8)).to.equal("3.00");
       });
    });
  });
})();
