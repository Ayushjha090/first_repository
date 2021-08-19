"use strict"
const http = require('http');
const fs = require('fs');
const port = 8000;

function requestHandler(req, res)
{
    res.writeHead(200, {"content-type": "text/html"});
    var  url = req.url;
    
    if(url == '/')
    {
        fs.readFile('./Index.html', function(err, data){
            if(err)
            {
                console.log(err);
                return res.end("<h1>Error</h1>");
            }

            return res.end(data);
        })
    }
    else if(url == '/about')
    {
        fs.readFile('./about.html', function(err, data){
            if(err)
            {
                console.log(err);
                return res.end("<h1>Error!!!</h1>");
            }

            return res.end(data);
        })
    }
    else if(url == '/contact')
    {
        fs.readFile('./contact.html', function(err, data){
            if(err)
            {
                console.log(err);
                return res.end("<h1>Error!!!</h1>");
            }

            return res.end(data);
        })
    }
    else{
        res.end("<h1>Error Page Not Found!!!</h1>");
    }
}   

var server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err)
    {
        console.log(err);
        return;
    }

    console.log("Server is running at port: ", port);
})