function criarCartao(categoia,pergunta,resposta){
//console.log(categoria,pergunta,resposta)
let container= document.getElementById('container');
//VARIAVEL CONTAINER BUSCADA PELO ID 'container'
let cartao=document.createElement('article')
//VARIAVEL CARTAO QUE CRIA <ARTICLE> NO ATML
cartao.classname='cartao';
//CRIA CLASS"cartao" para o elemento criado
cartao.innerHTML=
<div class="cartao__contudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__resposta"></div>

</div>
}
    let respostaEstaVisivel= false
    function viraCartao(){
        respostaEstaVisivel=!respostaEstaVisivel
        cartao.classList.toggle('active',respostaEstaVisivel)
    }
    cartao.addEventListener('click',viraCartao)
    container.appendChild(cartao)

