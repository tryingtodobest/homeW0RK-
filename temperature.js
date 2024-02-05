let c = "75.1 F"
let array = c.split(" ")
let type = array[1]
let degree = +array[0]
console.log(type)
function translate(degree,type){
    if(type==="F"){
        return `${degree} По фаренгейту = ${(degree-32)*5/9} Градусов Цельсия`
    } else if(type==="C"){
        return `${degree} Градусов Цельсия = ${(degree*9/5)+32} По Фаренгейту`
    }
}
console.log(translate(degree,type))