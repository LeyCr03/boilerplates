var http = require('http');



http.createServer(function (req: any, res: any) {
  const name: string = "wow"
  res.write(name); 
  res.end(); 
  
}).listen(8080); 