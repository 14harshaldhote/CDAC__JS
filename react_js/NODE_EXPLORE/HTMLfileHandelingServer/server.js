const http = require('http');
const fs=require('fs');
const port=3000
const host ="127.0.0.1"
const path=require("path")
 http.createServer((request,response)=>{
    
    try{
    if(request.url==="/"){
        response.writeHead(200,{"content-type":"text/html"})
        const pageData = fs.readFileSync(path.join(__dirname, "pages","index.html"),"utf-8")
       
        response.end(pageData)
    }
    else if(request.url==="/about"){
        response.writeHead(200,{"content-type":"text/html"})
        const pageData = fs.readFileSync(path.join(__dirname, "pages","about.html"),"utf-8")
       
        response.end(pageData)
    }
    else if(request.url==="/contact"){
        response.writeHead(200,{"content-type":"text/html"})
        const pageData = fs.readFileSync(path.join(__dirname, "pages","contact.html"),"utf-8")
       
        response.end(pageData)
    }
    
        
        else {
            response.writeHead(404,{"content-type":"text/html"})
            const pageData = fs.readFileSync("../pages/404.html", "utf8")
            response.end(pageData);
        }

    
    }
    catch(e){
        response.url
        console.log(e)
    }
}).listen(port,host,()=>{
    console.log(`server started on port http://${host}:${port}`)
})

