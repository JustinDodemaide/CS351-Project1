// JavaScript Document
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