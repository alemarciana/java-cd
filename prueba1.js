function pordos(a) {
    a*=2
    return a
}
a = 35
console.log(a)
function hello(){
    a=50
    console.log(a)
}
b=hello()
console.log(b) ///// Acá debería dar error
console.log(a) ///// Acá en teoría debería imprimir 35
/// Pero imprime 50
/// JavaScript culiao te odio