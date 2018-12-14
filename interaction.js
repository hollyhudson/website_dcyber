// make bits appear at the cursor position

let canvas;
const NUM_BITS = 20;
let bits = [];

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0); 			// put the canvas at the top
	canvas.style('z-index', '-1'); 	// put it behind the page content
}

function draw() {
	background(0);

	// Remove old bits from object array
	if (bits.length > NUM_BITS) {
		let extras = bits.length - NUM_BITS;
		for (let i = 0; i < extras; i++) {
			bits.splice(0,1);
		}
	}

	// Show the bits
	for (let i = 0; i < bits.length; i++) {
		bits[i].updatePos();
		bits[i].display();
	}
}

function mouseMoved() {
	let choices = [-5,-2,-1,0,1,2,5];
	let new_bit = parseInt(random(5));
	console.log(new_bit);	
	if (new_bit == 0) {
		console.log("pushing a bit");
		bits.push(new Bit(mouseX, mouseY, random(choices), random(choices)));
	}
}
