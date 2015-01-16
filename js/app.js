var click = 0

for (var i = 0; i < 9; i++) {
	$('ul').append('<li class="box"></li>');
};

$('.box').on('click', function(){
	click++;
	if (click%2) {
		$(this).addClass('x')
	} else {
		$(this).addClass('o')
	}
})
