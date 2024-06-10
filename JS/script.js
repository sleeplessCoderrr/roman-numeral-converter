function numeralConverter(num){
    let number = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let result = "";

    let i = 12;
    while(num > 0){
        let div = Math.floor(num / number[i]);
        num = num % number[i];
        while(div > 0){
            result += roman[i];
            div--;
        }
        i--;
    }   

    const container = document.querySelector("#output");
    container.innerHTML = "";
    const resultPlace = document.createElement("div");
    resultPlace.classList.add("content", "result");
    resultPlace.innerHTML = "";
    const ans = document.createElement("p");
    ans.textContent = result;
    resultPlace.appendChild(ans);
    container.appendChild(resultPlace);
}


document.querySelector("#convert-btn").addEventListener("click", function(){
    const container = document.querySelector("#output");
    container.innerHTML = "";
    const resultPlace = document.createElement("div");
    resultPlace.classList.add("content", "message");
    resultPlace.innerHTML = "";
    const message = document.createElement("p");
    const num = document.querySelector("#number").value;
    const number = parseInt(num);
    if(num == ""){
        message.textContent = "Please enter a valid number";
        resultPlace.appendChild(message);
        container.appendChild(resultPlace);
    } else if(num < 1) {
        message.textContent = "Please enter a number greater than or equal to 1";
        resultPlace.appendChild(message);
        container.appendChild(resultPlace);
    } else if(num > 3999){
        message.textContent = "Please enter a number less than or equal to 3999";
        resultPlace.appendChild(message);
        container.appendChild(resultPlace);
    } else {
        numeralConverter(number);
    }
})  