var flagga = 0;
function changeHeading(){
	var rubrik = document.getElementById('rubrik');
	if (flagga == 0) {
		rubrik.innerHTML = 'Du klickade';
		flagga = 1;
	}
	else{
		rubrik.innerHTML = 'Javascript';
		flagga = 0;
	}
}

function changeBg(){
	var tjo = document.getElementById('tjo');
	tjo.classList.add('nybg');
}

function changeBgAgain(){
	var tjo = document.getElementById('tjo');
	tjo.classList.add('greenbg');
}