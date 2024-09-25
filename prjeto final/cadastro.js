function cadastro_cliente(){
    const nome_client = document.getElementById ('firstname').value;
    const ultimonome_client = document.getElementById ('lastname').value;
    const emaill = document.getElementById ('email').value;
    const numero_cel = document.getElementById ('number').value;
    const senha = document.getElementById ('pasword').value;
    const verificar_senha = document.getElementById ('confirmPassword').value;






    document.getElementById('lastname').innerText=ultimonome_client;
    document.getElementById('email').innerText=emaill;
    document.getElementById('firstname').innerText=nome_client;
    document.getElementById('number').innerText=numero_cel;
    document.getElementById('password').innerText=senha;
    document.getElementById('confirmPasword').innerText=verificar_senha;

}

alert ('oi')



function postar_produto(){
            

}