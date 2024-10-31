function submitForm(string,palindrome,total) {
    
    // #1
    let string = document.getElementById("reverseString").value;
    let stringReverse = string.forward.split("").reverse().join("");
    document.getElementById("stringOutput").innerHTML = stringReverse;


    // #2
    let palindrome = document.getElementById("palindrome").value;
    let palOuput = forward.split("").reverse().join("");
    if (palindrome==palOuput) {
        palindromeOutput =  "true"
    } else { 
        palindromeOutput = "false"
    }
    document.getElementById("plaindromeOutput").innerHTML = palindromeOutput;

    // #3
    let subtotal = document.getElementById("subtotal").value;
    let tip = document.getElementById("tip").value;
    let total = subtotal * (1 + (tip/100));

    document.getElementById("totalAmount").innerHTML = total;

//return stringReverse, palindromeOutput, total

}