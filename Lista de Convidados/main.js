var nomes = [];
var n1 = "";
var comprimento = 0;
function add(){
n1=document.getElementById("nome1").value;
nomes.push(n1);
comprimento = nomes.length;
for(var i = 0; i < comprimento; i++){
    document.getElementById("nomes").innerHTML = nomes;
}
document.getElementById("nome1").value = "";
}
function view() {
    var coluna = [];
    comprimento = nomes.length;
for(var i = 0; i < comprimento; i++){
coluna.push("<h4>Nome "+nomes[i]+"</h4>")
}
var colunaV = coluna.join(" ");
document.getElementById("mostrarNomes").innerHTML = colunaV;
}
function list() {
    nomes.sort();
    var coluna = [];
    comprimento = nomes.length;
for(var i = 0; i < comprimento; i++){
coluna.push("<h4>Nome "+nomes[i]+"</h4>")
}
var colunaV = coluna.join(" ");

document.getElementById("lO").innerHTML = colunaV;
}
function pesquise() {
var n = document.getElementById("palavra").value;
var c = 0;
for(var j = 0; j < nomes.length; j++) {
    if(n==nomes[j]){
        c++;
    }
}
document.getElementById("nomesEncontrados").innerHTML = "nome encontrado" +c +"vezes"
}