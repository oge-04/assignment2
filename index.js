let stringInput = document.getElementById("stringInput");

function submitForm() {
    // #1
   
    function reverseString(){

        let stringOutput = "";
        for(let length = stringInput.length-1; i >= 0; i--)
            {
          stringOutput += str[i];
        }
        return stringOutput;
      }
      
        document.getElementById("stringOutput").innerHTML = stringOutput;
    
      
    // #2
   

    // #3
    let subtotal = document.getElementById("subtotalInput").value;
    let tip = document.getElementById("tipInput").value;
    let total = subtotal * (1 + (tip/100));

    document.getElementById("totalOutput").innerHTML = total;

}