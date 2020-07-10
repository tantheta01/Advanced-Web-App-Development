var rect = require('./rectangle')

function solveRect(l,b) {
	rect(l, b, (err, rectangle) => {
		if(err){
			console.log(err.message);
		}
		else{
			console.log(rectangle.perimeter() + rectangle.area());
		}
	});
	console.log("After the rect");
}


solveRect(1,1);
solveRect(4,4);
solveRect(-1,0);