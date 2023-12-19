const {createServer} =require("http");

const http=createServer((request,response)=>{
    console.log(request.url)
    if(request.url==="/"){
        response.end('This is root url')
    }
    else if(request.url==="/about"){
        response.end('This is about url response')
    }
    else if(request.url==="/contact"){
        response.end('This is contact url response')
    }
})


http.listen(3000,"127.0.0.1",()=>{
    console.log(`Server staretd on http://127.0.0.1:8888`)
})

