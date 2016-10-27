var menu = document.getElementById('navigation');
var active = 0;

function switchMenu () {
	if (active == 0) {
		menu.style.height = "auto";

		active--;
	} else {
		menu.style.height = "0";
		active++
	}

}