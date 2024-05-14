let statement="i love my country pakistan<br>i like my village chk no.12  <br>i  love my homeland <br>"
let cities="1)faislabad 2)multan 3)islamabad 4)lahore 5)karachi 6)sheikhupur"
document.getElementById("btn1").innerHTML=" ";
document.getElementById("btn2").innerHTML=" "
function lowercase(){ 
    document.getElementById("output").innerHTML=statement;
}
function uppercase(){
    newtext=statement.toUpperCase();
    document.getElementById("output").innerHTML=newtext;
}
function printcities(){
        document.getElementById("output").innerHTML=cities
}
function capitalize(){
   let textincaptilization='<span style="text-tranform:capitalize;">' + statement + '</span>';
   document.getElementById("output").innerHTML=textincaptilization
}
function betterformatting() {
   let text= document.getElementById("inputtext").Value;
   if (!text){
   alert("pleace type your text")
   return;
   }
  inputtext=text.toLowerCase();
  document.getElementById("output").style.textTransforma='capitalize';
  document.getElementById("output").innerHTML=text
}
function addcity() {
let newcity=document.getElementById("inputtext").value;
if(newcity.lenght < 3){
    alert("please enter your tecxt correctly")
    return;
}
cityfirstletter=newcity.slice(0, 1).touppercase;
allcityletter=newcity.slice(1).toLowerCase;
let citywordincaptilization = cityfirstletter + allcityletter;
console.log(citywordincaptilization)
let cityFound=false
for  ( let i = 0; i < cities.length; i++){
if(city[i]===citywordincaptilize){
    cityFound=true;
    let hTML = '<span style="colore=red;font size:20px">'*+ citywordincaptilization + '*</span>is alredy in list';
}
}
}
if(cityFound===false){
    city.push(citywordincaptilization);
    let hTML ='<span style="colore=red;font size:20px">'*+ citywordincaptilization + '*</span>hasbeen succesfully added in list';
    document.getElementById(output).innerHTML=hTML;
}
