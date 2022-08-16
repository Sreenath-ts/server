var http=require('http')

http.createServer(sree).listen(7000)

function sree(req,res){
res.write("sreenath here")
res.end()
}