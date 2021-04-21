// document.querySelector(".username-label").style.backgroundColor = "red";
 const username = document.querySelector(".username-input")
 const password = document.querySelector(".password-input")

 document.querySelector(".login-btn").addEventListener("click", function(e){
    e.preventDefault()
   const user ={
      username: username.value,
      password: password.value
   }

    fetch('http://127.0.0.1:5000/users', {
       headers:{
         'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
       },
    method: 'post',
    body: JSON.stringify(user)
  })
 })