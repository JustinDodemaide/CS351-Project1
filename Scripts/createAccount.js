// JavaScript Document
//street, city, state, zip, email, phone
function attemptToMakeAccount(){
	event.preventDefault();
	var username = document.getElementById('username').value
	if(usernameIsTaken(username)){
		document.getElementById('error-message').style.display = 'block'
		return
	}
	
	var password = document.getElementById('password').value
	
	var street = document.getElementById('street').value
	if(street != ""){
		if(containsNumber(street)){
			document.getElementById('error-message').style.display = 'block'
			return
		}
	}
	
	var city = document.getElementById('city').value
	if(city != ""){
		if(containsNumber(city)){
			document.getElementById('error-message').style.display = 'block'
			return
		}
	}
	
	var state = document.getElementById('state').value
	if(state != ""){
		if(containsNumber(state)){
			document.getElementById('error-message').style.display = 'block'
			return
		}
	}
	
	var zip = document.getElementById('zip').value
	if(zip != ""){
		if(zip.length != 5 || !containsNumber(zip)){
			document.getElementById('error-message').style.display = 'block'
			return
		}
	}
	
	var email = document.getElementById('email').value
	
	var phone = document.getElementById('phone').value
	if(phone != ""){
		if(phone.length != 10 || !containsNumber(phone)){
			document.getElementById('error-message').style.display = 'block'
			return
		}
	}
	
	let accounts = JSON.parse(sessionStorage.getItem('accounts'))
	if(accounts == null){
		accounts = []
	}
	let new_account = {username,password,street,city,state,zip,email,phone}
	accounts.push(new_account)
    sessionStorage.setItem('accounts', JSON.stringify(accounts))
	document.location.href = 'viewAccount.html';
	
	sessionStorage.setItem('currentUser', JSON.stringify(new_account));
}

function usernameIsTaken(username){
	let accounts = JSON.parse(sessionStorage.getItem('accounts'))
	if(accounts == null){
		return false
	}
	let foundAccount = accounts.find(account => account.username === username)

	if(foundAccount != null){
		return true
	}
	return false
}

// https://stackoverflow.com/questions/5778020/check-whether-an-input-string-contains-a-number-in-javascript
function containsNumber(s){
	return /\d/.test(s);
}