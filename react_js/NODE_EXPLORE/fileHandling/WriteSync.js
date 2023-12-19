const f=require("fs")

try{

f.writeFileSync("myfile.txt", "New Data for writeFileSync() Anupam...","utf-8");
}
catch(err){
    console.log(err)
}
console.log("rest of code...");