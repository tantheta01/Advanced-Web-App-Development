var rect = {
	perimeter : (x,y) => (2*(x+y)),
	area : (x,y) => (x*y)
};

function solveRect(l,b) {
	if(l<=0 || b<=0){
		console.log("Bhag saale");
	}
	else{
		console.log("Perimeter of the rectangle " + rect.perimeter(l,b) + " Area of the rectangle: " + rect.area(l,b));
	}
}


solveRect(1,1);
solveRect(4,4);
solveRect(-1,0);