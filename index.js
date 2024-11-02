// #1
function reverseString () {
  
  let stringInput = document.getElementById("stringInput").value;
  let stringOutput = " ";
  for ( let length = stringInput.length - 1; length >= 0; length -- ) {
    stringOutput += stringInput[length]
  } 
  document.getElementById("stringOutput").innerHTML = stringOutput;
  console.log (stringOutput);
  
}


// #2
function palindromeCheck() {

  let pInput = document.getElementById("pInput").value;
  let pOutput = "";
  for ( let length = pInput.length - 1; length >= 0; length-- ) {
    pOutput += pInput[length]
  }
  if (pOutput == pInput) {
    document.getElementById("pOutput").innerHTML = "Palindrome";
  } else {
    document.getElementById("pOutput").innerHTML = "Not Palindrome";
  }
  console.log(pOutput);

}


// #3
function totalAmount() {

  let subtotal = parseFloat(document.getElementById("subtotalInput").value);
  let tip = parseFloat(document.getElementById("tipInput").value);
  let total =subtotal * (1 + (tip/100));
  document.getElementById("totalOutput").innerHTML = total.toFixed(2);

  }
