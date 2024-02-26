// JavaScript Document
function attemptLogin(){
	event.preventDefault();
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
	
	let accounts = JSON.parse(sessionStorage.getItem('accounts'))
	if(accounts == null){
		return
	}
	let found = false
	if(accounts.find(account => account.username === username && account.password === password)){
		found = true
	}
	
	if(found){
		document.location.href = 'home.html';
	}
	else{
		document.getElementById('error-message').style.display = 'block';
	}
}

/*
	if(accounts == null){
		accounts = []
	}
	accounts.push({ username, password })
	for(let i in accounts){
		document.writeln("<h1>" + JSON.stringify(accounts) + "</h1>")
	}
    sessionStorage.setItem('accounts', JSON.stringify(accounts));
*/