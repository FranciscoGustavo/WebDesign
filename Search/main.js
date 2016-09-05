var btnSearch = document.getElementById('btnSch');
var btnClose = document.getElementById('btnClose');
var input = document.getElementById('search');

function Swich(){
	btnSearch.style.right = '';
	btnSearch.style.left = '0';
	btnClose.style.fontSize = '18px';
	input.style.width = '90%';
}

function Closed(){
	btnSearch.style.left = '';
	btnSearch.style.right = '0';
	btnClose.style.fontSize = '0';
	input.style.width = '0';
}