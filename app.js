function getValue(value){
    var input = document.getElementById("search")
    input.value += value
} 
function results(){
    var input = document.getElementById("search")
    var result = eval(input.value)
    input.value = result
}
function allClear(){
    var input = document.getElementById("search")
    input.value = ""
}
function removeVal(){
    var input = document.getElementById("search")
    input.value = input.value.slice(0 , -1)
}