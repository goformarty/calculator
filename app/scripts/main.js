class Calculator {
  constructor() {}

  sum(args) {
    return args.reduce(function(a,b) {
      return a + b;
    }
    )}

  substract(args) {
    return args.reduce(function(a, b) {
      return a - b;
    })
  }

  multiply(args) {
    return args.reduce(function(a, b) {
      return a * b;
    })
  }

  divide(args) {
    return args.reduce(function(a, b) {
      return a / b;
    })
  }
}
