const arrayOf100 = Array.from({ length: 100 }, (_, i) => i + 1);

function fizzBuzzOneNumber(n) {
  if (typeof n != 'number') { return 'not valid input' };
  return (n % 3 ? '' : 'Fizz') + (n % 5 ? '' : 'Buzz') || n
}

function myFunction() {
  const number = document.getElementById("your-number").value;
  if (number <= 0) {
    document.getElementById("fizzBuzzAnswer").innerText = 'Your number should be positive!';
    document.getElementById("fizzbuzz").innerText = '';
    document.getElementById("divisors").innerText = '';
    document.getElementById("prime").innerText = '☠️☠️☠️';
  } else {
    // if (n > 100) {return '> 100'};'
    document.getElementById("fizzBuzzAnswer").innerText = 'Your FizzBuzz answer is:';
    document.getElementById("divisors").innerText = '😼 Divisors are:';
    document.getElementById("fizzbuzz").innerText = fizzBuzzOneNumber(parseInt(number, 10));
    document.getElementById("prime").innerText = findAllPrimeNumbers(parseInt(number, 10));
  }
};

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    myFunction()
  }
});

function findAllPrimeNumbers(n) {
  if (n <= 0) {
    return 'Number must be positive!'
  }
  if (typeof n != 'number') {
    return 'Must be number!'
  }
  const factors = [];
  let divisor = 2;
  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}