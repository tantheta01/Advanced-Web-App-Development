const http = require("http");
const fs = require("fs");
const path = require('path');

const port = 3000;
const hostname = 'localhost';
const server = http.createServer((req, res) => {
	console.log(req.headers);

	if(req.method == 'GET') {
		var filUrl;
		if(req.url == '/') {
			fileUrl = '/index.html';
		}
		else fileUrl = req.url;
		var filepath = path.resolve('./public' + fileUrl);
		const fileExt = path.extname(filepath);
		console.log(fileExt + "This is the fileExt")
		/*The FileExt gives the file extension */
		if(fileExt == '.html'){
			fs.exists(filepath, (exists) => {
				if(!exists){
					console.log("page not found");
					res.statusCode = 404;
					res.setHeder('Content-type', 'text/html');
					res.end('<html><body>Error 404: ' + fileUrl + " not found</body></html>");

					return;
				}
				res.statusCode = 200;
				res.setHeader('Content-type', 'html/text');
				fs.createReadStream(filepath).pipe(res);
			})
		}
		else {
			res.statusCode = 404;
			res.setHeader('Content-type', 'html/text');
			res.end('<html><body>Error 404 ' + fileUrl + ' not an html document</body></html>');
			return;
		}
	}
	else {
		res.statusCode = 404;
		res.setHeader('Content-type', 'text/html');
		res.end('<html><body><h1>Error 404 ' + req.method + ' not supported</h1></body></h1>');
		return;
	}
});

server.listen(port, hostname, () => {
	console.log(`server running at http://${hostname}:${port}`);
})