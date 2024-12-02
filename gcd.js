function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
console.log(gcd(36,60))

// 2*2*3*3
// 2*2*3*5

// 2*2*3
  