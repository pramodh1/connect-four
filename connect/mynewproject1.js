var player1 = prompt("what is your name ,you will be blue");
var player1col = 'rgb(86,155,255)';


var player2 = prompt("what is your name ,you will be red");
var player2col = 'rgb(237,45,73)';
var game = true;
var table = $('table tr');

function wins(row, col) {
	console.log(" you won the match");
	// console.log(row);
	// console.log(col);
}

function colorchange(rowind, colind, color) {

	console.log(rowind); // edhi undefined ostundhi
	// console.log(colind[0].cellIndex);

	return table.eq(rowind).find('td').eq(colind).find('button').css('background-color', color);
}

function rcolor(rowind, colind) {

	return table.eq(rowind).find('td').eq(colind).find('button').css('background-color');
}

function bottom(colind) {
	var colorrep = rcolor(5, colind);
	for (var row = 5; row >= 0; row--) {
		colorrep = rcolor(row, colind);
		if (colorrep === 'rgb(128,128,128)') {
			return row
		}
	}

}

function colorcheck(one, two, three, four) {


	return (one === two && one === three && one === four && one !== 'rgb(128,128,128)' && one !== undefined)

}

function horiz() {
	for (var row = 0; row < 6; row++) {
		for (var col = 0; col < 4; col++) {
			if (colorcheck(rcolor(row, col), rcolor(row, col + 1), rcolor(row, col + 2), rcolor(row, col + 3))) {
				// console.log('horz');
				wins(row, col);
				return true;

			} else {
				continue;
			}
		}
	}
}

function verti() {
	for (var col = 0; col < 7; col++) {
		for (var row = 0; row < 3; row++) {
			if (colorcheck(rcolor(row, col), rcolor(row + 1, col), rcolor(row + 2, col), rcolor(row + 3, col))) {
				// console.log('vertical');
				wins(row, col);
				return true;

			} else {
				continue;
			}
		}
	}
}




function diagonal() {
	for (var col = 0; col < 5; col++) {
		for (var row = 0; row < 7; row++) {
			if (colorcheck(rcolor(row, col), rcolor(row + 1, col + 1), rcolor(row + 2, col + 2), rcolor(row + 3, col + 3))) {
				console.log('diagonal');
				wins(row, col);
				return true;

			} else if (colorcheck(rcolor(row, col), rcolor(row - 1, col + 1), rcolor(row - 2, col + 2), rcolor(row - 3, col + 3))) {
				console.log('diagonal');
				wins(row, col);
				return true;
			} else {
				continue;
			}
		}
	}
}
var currentplayer = 1;
var currentname = player1;
var currentcolor = player1col;
$('h3').text(player1 + "pick a coloumn to drop");

$('.button').on("click", function () {

	var col = $(this).closest('td');

	var bottomavail = bottom(col);
	colorchange(bottomavail, col, currentcolor);
	if (horiz() || verti() || diagonal()) {
		$('h1').text(currentname + " you have won the game");
		$('h3').fadeOut('fast');
		$('h2').fadeOut('fast');


	}
	currentplayer = currentplayer * -1;
	if (currentplayer === 1) {
		currentname = player1;
		$('h3').text(currentname + 'its your turn ');
		currentcolor = player1col;
	} else {
		currentname = player2;
		$('h3').text(currentname + 'its your turn ');
		currentcolor = player2col;
	}


})