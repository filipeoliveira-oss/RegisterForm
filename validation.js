function validationRegister(){
    if(firstname.value == ''||
    lastname.value == ''||
    inputemail.value == ''||
    birthinput.value == ''||
    password.value == ''||
    repassword.value == ''||
    selectarea.value == ''
    ){
        alert('Preencha todos os campos');
    }else if(password.value != repassword.value ){
      alert("As senhas são diferentes");
    }
    else{
        alert("Formulário enviado!!!");
    firstname.value = '';
    lastname.value = '';
    inputemail.value = '';
    birthinput.value = '';
    password.value = '';
    repassword.value = '';
    selectarea.value = 'default'
    }           
}

function validationLogin(){
   if(username.value == 'admin' &&
    password.value == 'admin'){
        alert('Login realizado com sucesso');
        username.value = '';
        password.value = '';
    }
   }