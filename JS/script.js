function numeralConverter(num){
    
}


document.querySelector("#check-btn").addEventListener("click", function(){
    const num = document.querySelector("#number-input").value;
    const result = document.querySelector("#result");

    if(num == ""){
        result.innerHTML = "Please enter a number";
    } else {
        numeralConverter(num);
    }

})