function criarCartao(categoia,pergunta,resposta){
    let container= document.getElementById('container');
    //VARIAVEL CONTAINER BUSCADA PELO ID 'container'
    let cartao=document.createElement('article')
    //VARIAVEL CARTAO QUE CRIA <ARTICLE> NO ATML
    cartao.classname='cartao';
    //CRIA CLASS"cartao" para o elemento criado
    cartao.innerHTML=
    <div class="cartao__conteudo">
    <h3>${categiria}</h3>  
    <div class="cartao__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="caryao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    //inner.HTML insere texto  no HTML via JAVASCRIPT
    let respostaEstaVisivel =false
    function viraCartao(){
        respostaEstaVisivel=!respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    //criaçao da funçao viraCartao
    //ao virar o cartao a resposta invisivel ficara invisivel por causa do !
    //ao clicar no cartao ele adiciona o metodo active p/ ativar o clic na resposta
    cartao.addEventListener('click',viraCartao)
    container.appendChild(cartao)
    //adiciona um evento deescuta para o clic do cartao
    //ao clicar criar um item "filho(appenChild) no cartao"



}









    