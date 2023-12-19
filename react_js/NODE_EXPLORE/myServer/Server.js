const http=require('http')
//400 means request no going  to the server
//500 server sending response to clnet havent reaced to client
//404 not fount
//200 everything ok

const server=http.createServer((request,response)=>{
    response.writeHead(200,{"Content-type":"text/plain"})

    response.end("<h1>This my response from server</h1>")
})

const port=3000
const host="127.0.0.1"

server.listen(port,host,()=>{
    console.log(`Server staretd on http://${host}:${port}`)
})