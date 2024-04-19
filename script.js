const header = document.getElementById("header");
function appendToDisplay(input) {
    header.value += input;
}
function clearDisplay() {
    header.value = ""; 
}

function calculate() {
 try{
    header.value = eval(header.value);
 }
 catch(error){
    header.value = "Error";
 }
}