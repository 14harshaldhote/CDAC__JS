const f=require("fs")

try{

f.appendFileSync("myfile.txt", "Append Data sync()...","utf-8");
}
catch(err){
    console.log(err)
}
console.log("rest of code...");