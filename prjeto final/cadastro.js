

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


function postar_produto(){
    alert('eeeeeeeee')

    const novo_produto = document.getElementById ('nomeProduto').value;
    const preco_produto = document.getElementById ('precoProduto').value;
    const dec_produto = document.getElementById ('descricao').value;

    let tabela = `
    <tr> ${novo_produto} </tr>;
    <tr> ${preco_produto} </tr>;
    <tr> ${dec_produto} </tr>; `;


    document.getElementById('').innerHTML=tabela
    
        
        
       
    
}