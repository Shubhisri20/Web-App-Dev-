
var object  = document.getElementById("submit")
object.addEventListener("click", ()=>{
    // var num1 = document.getElementById('num1').value;
    // var num2 = document.getElementById('num2').value;
    // var num3 = document.getElementById('num3').value;
    // if((num1>=num2)&&(num1>=num3)){
    //     alert(num1)
    // }
    // else if((num2>=num1)&&(num2>=num3)){
    //     alert(num2)
    // }
    // else{
    //     alert(num3)
    // }


    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    if((num1>=num2)&&(num1>=num3)){
        document.getElementById('result').value = num1;
    }
    else if((num2>=num1)&&(num2>=num3)){
        alert(num2)
    }
    else{
        alert(num3)
    }



});