let number = "128"
let result = number.split("").reduce(function(element, acc){
    return +element + +acc
})
console.log(result)