let convert = ()=>{
    let opt = document.querySelector("#unit");
    let display = document.querySelector(".value")
    var temp = document.querySelector(".txtbox").value;
    if(opt.value == "Celcius"){
        let ans = temp*(9/5)+32
        display.innerHTML = ans.toFixed(3)+"F"
    }
    else{
        let ans = (temp-32)*(5/9)
        display.innerHTML = ans.toFixed(3)+"C"
    }
}