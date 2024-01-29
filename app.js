function signin(){
    var getemail = document.querySelector('#email')
    var getpass = document.querySelector('#pass')
    var getselect = document.querySelector('#select')
    localStorage.setItem('Email',getemail.value)
    localStorage.setItem('pasword',getpass.value)
    localStorage.setItem('City Select',getselect.value)
    alert('SignIn Succsessfull')
    location.href = "./LogIn.html"
}