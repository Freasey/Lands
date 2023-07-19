function cek(){
var umur = prompt("Berapa Umur mu?");
if (Number(umur)<18){
    alert("Umur belum cukup coba lagi nanti yaa");
}
else if (Number(umur)===18){
    alert("Hari pertama nih yee");
}
else {
    alert("Silahkan Naik");
}
}
 function turu(a,b){
    return a*b
 }

 var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

 var database = {
    nama: "i",
    pass: "b"
 };    
function sistemLogin(User, Ps){
   
    if (User === database.nama && 
        Ps === database.pass)
    {alert("Benaar");}
    else {
        alert("Salah");
    }
    
 }
 function Login(){
 var usernameprompt = prompt("siapa nama mu?");
    var Passprompt = prompt("Isi Password");
sistemLogin(usernameprompt, Passprompt); 
}


var Sandal= ["Gaga", "dodol", "grafiti"]
Sandal.forEach(function(e) {
    console.log(e)
});