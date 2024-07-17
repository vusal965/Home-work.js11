let text = "Hel,lo , wo,r,ld"


for(let i = 0; i < text.length; i++){
let result = text.indexOf(",")
console.log(result);
}




let text2 = prompt("enter a text")


for(let a = 0; a < text2.length; a++){
    
if(text2.replace(/[^0-9]/g, "")){
    console.log("metnde reqem var");
   
}
else{
    console.log("metnde reqem yoxdur");
}

}