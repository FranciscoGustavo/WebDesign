var menu = document.getElementById('nav');
var activar = 0;

function openMenu () {
	if (activar == 0) {
		menu.style.padding = "10px 0";
		menu.style.height = "auto";
		menu.style.transition = "all 0.1s";
		
		activar = 1;
	} else {
		menu.style.padding = "0";
		menu.style.height = "0";
		activar = 0;
	}
}


var user = document.getElementById('user');
var sombra = document.getElementById('background');
var body = document.getElementById('body');

function openUser() {
	body.style.overflowY = "hidden";
	user.style.transform = "translateX(0%)";
	user.style.transition = "all 0.1s";
	sombra.style.transition = "all 0.1s";
	sombra.style.height = "100vh";
	sombra.style.transition = "all 0.1s";
}

function closeUser() {
	body.style.overflowY = "scroll";
	user.style.transform = "translateX(-100%)";
	sombra.style.height = "0";
	sombra.style.transition = "all 0.1s";
}

var nav = document.getElementById('menu');
var lis = document.getElementById('lista');
var total = 0;
function autoMenu() {
	total = nav.offsetWidth - 620;
	lis.style.marginLeft = total + "px";
	//alert(total);
}

autoMenu();