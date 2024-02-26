// JavaScript Document
function checkIfSignedIn(){
	var user = JSON.parse(sessionStorage.getItem('currentUser'))
	if(user != null){
		document.location.href = 'viewAccount.html';
	}
}

function attemptLogin(){
	event.preventDefault();
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
	
	let accounts = JSON.parse(sessionStorage.getItem('accounts'))
	if(accounts == null){
		return
	}
	let foundAccount = accounts.find(account => account.username === username && account.password === password)

	if(foundAccount != null){
		sessionStorage.setItem('currentUser', JSON.stringify(foundAccount));
		document.location.href = 'viewAccount.html';
	}
	else{
		document.getElementById('error-message').style.display = 'block';
	}
}