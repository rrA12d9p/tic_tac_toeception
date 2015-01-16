var winningCombos = [[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]];
var winnableCombos = ["open","open","open","open","open","open","open","open"];

for (var i = 0; i < 9; i++) {
	$('ul').append('<li class="box open"></li>');
};

$('.box').on('click', function(){
	if ($(this).hasClass('x') || $(this).hasClass('o')) { return false }

	if ($('.x,.o').length % 2 == 0) {
		var content = 'x';
	} else {
		var content = 'o';
	}
	
	$(this).removeClass('open').addClass(content);

	checkVictory($('.board'));

	// console.log(winnableCombos);
	
})

function checkVictory(board) {

	for (var i = 0; i < winningCombos.length; i++){
		var xCount = 0;
		var oCount = 0;

		for (var j = 0; j < winningCombos[i].length; j++){
			cellNum = winningCombos[i][j];
			cell = board.children().eq(cellNum);
			
			if (cell.hasClass('x')) { xCount += 1 }
			if (cell.hasClass('o')) { oCount += 1 }
		}

		if (xCount == winningCombos[i].length) { 
			// x wins
			winnableCombos[i] = true;
			xWins(board);
		} else if (oCount == winningCombos[i].length) {
			// o wins
			winnableCombos[i] = true;
			oWins(board);
		} else if (xCount > 0 && oCount > 0) {
			winnableCombos[i] = false;
		}
	}

	if (tieGame($('.board'))) {
		alert('tie game!');
		clearBoard($('.board'));
		return;
	}

}

function tieGame(board){
	// return true if there are no open win groups and no winners
	if ( $(".open").length == 0
		&& winnableCombos.indexOf( true ) == -1 ) {
		return true;
	}
	return false;
}

function xWins(board){
	alert('x wins');
	var xWins = $('#x-wins');
	xWins.html(parseInt(xWins.html())+1);
	clearBoard(board);
}

function oWins(board){
	alert('o wins');
	var oWins = $('#o-wins');
	oWins.html(parseInt(oWins.html())+1);
	clearBoard(board);
}

function clearBoard(board){
	board.children().removeClass('x o').addClass('open');
	winnableCombos = ["open","open","open","open","open","open","open","open"];
}