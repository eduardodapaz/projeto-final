/*parte da kakau */
function cadastro_cliente(){
    const emaill = document.getElementById ('Email').value;
    const cpf_user = document.getElementById ('CPF').value;
    const numero_cel = document.getElementById ('TEL').value;
    const nome_client = document.getElementById ('NOME1').value;
    const ultimonome_client = document.getElementById ('NOME2').value;
    const senha = document.getElementById ('CONFIRMSENHA').value;
    const verificar_senha = document.getElementById ('CONFIRMSENHA2').value;


    document.getElementById('email').innerHTML=emaill;
    document.getElementById('CPF').innerHTML=cpf_user;
    document.getElementById('TEL').innerHTML=numero_cel;
    document.getElementById('NOME1').innerHTML=nome_client;
    document.getElementById('NOME2').innerHTML=ultimonome_client;
    document.getElementById('CONFIRMSENHA').innerHTML=senha;
    document.getElementById('CONFIRMSENHA2').innerHTML=verificar_senha;


    alert("scrr")
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