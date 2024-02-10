
function signin(){
    var getEmail = document.querySelector('#Email')
    var getPass = document.querySelector('#pass')
    localStorage.setItem('email',getEmail.value)
    localStorage.setItem('password',getPass.value)
    alert('Sign Up successful')
    location.href = './LogIn.html'
}

function login(){
    var getEmail = document.querySelector('#sEmail').value
    var getPass = document.querySelector('#spass').value
    if(localStorage.getItem('email') == getEmail && localStorage.getItem('password') == getPass){
        alert('Login Successful')
        location.href = './index.html'
    }
    else{
        alert('Please SingIn')
        location.href = './SignIn.html'
    }
    
}
var getul = document.getElementById('getUl');

function addtodo() {
    var getinp = document.getElementById('Inp');
    var cerataeli = document.createElement('li');
    var litext = document.createTextNode(getinp.value);
    cerataeli.appendChild(litext);
    getul.appendChild(cerataeli);
    getinp.value = "";

    var deltebtn = document.createElement('button');
    var txtbtn = document.createTextNode('Delete');
    deltebtn.appendChild(txtbtn);
    cerataeli.appendChild(deltebtn);
    deltebtn.setAttribute('onclick', "deltodo(this)");
    var editbtn = document.createElement('button');
    var editTxtBtn = document.createTextNode('Edit');
    editbtn.appendChild(editTxtBtn);
    cerataeli.appendChild(editbtn);
    editbtn.setAttribute('onclick', "edittodo(this)");
}


function deltodoall() {
    getul.innerHTML = "";
}

function deltodo(abc) {
    abc.parentNode.remove();
}
function edittodo(abc) {
    var newText = prompt("Enter new text:");
    if (newText !== null && newText !== "") {
        abc.parentNode.firstChild.nodeValue = newText;
    }
}

function logout(){
    localStorage.clearl
    location.href = './SignIn.html'

}