function greeting() {
    console.log("Hello and Welcome")
  }
  
  greeting()
  
  function greeting1(name) {
    console.log(`Hello ${name}`)
  }
  
  greeting1("Omar")
  greeting1("Yazan")
  greeting1("Faisal")
  
  function info(name, age) {
    console.log(`Hello ${name}, your age is ${age}`)
  }
  
  info("Omar", 24)
  info("Yazan", 24)
  info("Faisal", 24)
  
  function numbers() {
    for (let i = 0; i <= 50; i++) {
      console.log(i)
    }
  }
  
  numbers()
  
  function sum(a, b) {
    console.log(a + b)
  }
  
  sum(4, 5)
  
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  
  function calculator(x, y, operation) {
    switch (operation) {
      case "+":
        console.log(x + y);
        break;
      case "-":
        console.log(x - y);
        break;
      case "*":
        console.log(x * y);
        break;
      case "/":
        console.log(x / y);
        break;
    }
  }
  
  calculator(2, 3, "*")
  