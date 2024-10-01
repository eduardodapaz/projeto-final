/*parte da kakau */
function cadastro_cliente(){
    const nome_client = document.getElementById ('nome usuario').value;
    const ultimonome_client = document.getElementById ('nome usuario2').value;
    const emaill = document.getElementById ('email').value;
    const numero_cel = document.getElementById ('numero_tel').value;
    const senha = document.getElementById ('senha').value;
    const verificar_senha = document.getElementById ('confirm_senha').value;
    const cpf_user = document.getElementById ('cpf_usuario').value;

    alert ('eba')



    document.getElementById('nome usuario2').innerText=ultimonome_client;
    document.getElementById('email').innerText=emaill;
    document.getElementById('nome usuario').innerText=nome_client;
    document.getElementById('numero_tel').innerText=numero_cel;
    document.getElementById('senha').innerText=senha;
    document.getElementById('confirm_senha').innerText=verificar_senha;
    document.getElementById('cpf_usuario').innerText=cpf_user;


}
/*parte da kakau fim */


function postar_produto(){
    alert('eeeeeeeee');

    const novo_produto = document.getElementById('nomeProduto').value;
    const preco_produto = document.getElementById('precoProduto').value;
    const dec_produto = document.getElementById('descricao').value;

    let tabela = `
    <tr>
    <td> ${novo_produto} </td>
    <td> ${preco_produto} </td>
    <td> ${dec_produto} </td> 
    </tr>`;


    document.querySelector('#tabela tbody').innerHTML = tabela;
    
        
        
       
    
}
