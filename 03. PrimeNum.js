/* Time Compexity: O(n)
 */
function primeNumber(n) {
  if (n <= 1) {
    return false;
  }
  console.log(n);
  for (let i = 2; i < n; i++) {
    console.log(n + " " + i);
    if (n % i == 0) {
      return false;
      console.log(n + " " + i);
    }
  }
  return true;
}
primeNumber(2);

/*
Time Complexity: O(sqrt(n))
Prime numbers: 2,3,5,7,13,17...
Formula: Except 2 and 3, 5 = (6-1), 7=((1*6)+1). 13=((2*6)+1) etc. 
p = 6k(+-)1; k - integer
*/
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  // 2 and 3 already chacked before so we can use the code below
  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  return true;
}
