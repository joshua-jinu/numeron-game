describe("Numeron Game - Operator Logic", function() {
 

  
  
  it("should correctly evaluate the plus operator", function() {
    // Set numbers such that the plus condition is true
    document.getElementById("number1").innerHTML = "50";
    document.getElementById("number2").innerHTML = "30";
    // document.getElementById("number3").innerHTML = "80"; // 50 + 30

    const plusButton = document.getElementById("plus");

    // Simulate click event on plus button
    plusButton.click();

    // Check if the plus operation is correct
    expect(parseInt(document.getElementById("number3").innerHTML)).toBe(80);
  });

  it("should correctly evaluate the minus operator", function() {
    // Set numbers such that the minus condition is true
    document.getElementById("number1").innerHTML = "50";
    document.getElementById("number2").innerHTML = "30";
    // document.getElementById("number3").innerHTML = "20"; // 50 - 30

    const minusButton = document.getElementById("minus");

    // Simulate click event on minus button
    minusButton.click();

    // Check if the minus operation is correct
    expect(parseInt(document.getElementById("number3").innerHTML)).toBe(20);
  });

  it("should correctly evaluate the multiply operator", function() {
    // Set numbers such that the multiply condition is true
    document.getElementById("number1").innerHTML = "5";
    document.getElementById("number2").innerHTML = "4";
    // document.getElementById("number3").innerHTML = "20"; // 5 * 4

    const mulButton = document.getElementById("mul");

    // Simulate click event on multiply button
    mulButton.click();

    // Check if the multiply operation is correct
    expect(parseInt(document.getElementById("number3").innerHTML)).toBe(20);
  });

  it("should correctly evaluate the divide operator", function() {
    // Set numbers such that the divide condition is true
    document.getElementById("number1").innerHTML = "20";
    document.getElementById("number2").innerHTML = "4";
    // document.getElementById("number3").innerHTML = "5"; // Math.floor(20 / 4)

    const divideButton = document.getElementById("divide");

    // Simulate click event on divide button
    divideButton.click();

    // Check if the divide operation is correct
    expect(parseInt(document.getElementById("number3").innerHTML)).toBe(5);
  });

  it("should correctly evaluate the modulus operator", function() {
    // Set numbers such that the modulus condition is true
    document.getElementById("number1").innerHTML = "20";
    document.getElementById("number2").innerHTML = "6";
    // document.getElementById("number3").innerHTML = "2"; // 20 % 6

    const modulusButton = document.getElementById("modulus");

    // Simulate click event on modulus button
    modulusButton.click();

    // Check if the modulus operation is correct
    expect(parseInt(document.getElementById("number3").innerHTML)).toBe(2);
  });
});
