// JavaScript Document
//street, city, state, zip, email, phone
function loadDetails(){
	var user = JSON.parse(sessionStorage.getItem('currentUser'))
	var list = document.getElementById('list')

	for(let string in user){
		var item = document.createElement('li');
		var text = document.createTextNode(string.charAt(0).toUpperCase() + string.slice(1) + ": " + user[string]);
		item.appendChild(text);
		list.appendChild(item)
	}
}

function logout(){
	sessionStorage.setItem('currentUser',null)
	document.location.href = 'account.html';
}