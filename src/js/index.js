/* 
    OBEJETIVO - quando clicar na aba temos que mostrar
    o conteúdo da aba que foi clicada pelo usuário e 
    esconder o conteúdo da aba anterior
      
    - passo 1 - dar um jeito de pegar os elementos que
    representam as abas no HTML

    - passo 2- dar um jeito de indentificar o clique no
    elemento da aba

    - passo 3 - quando o usuário clicar, desmarcar a aba
    selecionada

    - passo 4 - marcar a aba clicada como selecionado

    - passo 5 - esconder o conteúdo anterior 

    - passo 6 - mostrar o conteúdo da aba selecionada



*/

 //passo 1 - dar um jeito de pegar os elementos que representam as abas do html
const abas = document.querySelectorAll(".aba");

//  passo 2- dar um jeito de indentificar o clique no elemento da aba
 abas.forEach(aba=> {/* para cada lista*/

        aba.addEventListener("click", function() { /*funcao para cada lista*/
            
        if(aba.classList.contains("selecionado")){
            return;
        }
        selecionarAba(aba)

        

       mostrarInformacoesDaAba(aba)
        });
    
 });

 function selecionarAba(aba){
  //passo 3 - quando o usuário clicar, desmarcar a aba selecionada
  const abaSelecionada = document.querySelector(".aba.selecionado");

  abaSelecionada.classList.remove("selecionado")/* "classiclist" para acessar a lista e remover o seleiconado*/


  //passo 4 - marcar a aba clicada como selecionado
  aba.classList.add("selecionado")
 }
 function mostrarInformacoesDaAba(aba){

  // passo 5 - esconder o conteúdo anterior
  const informacaoSelecionada = document.querySelector(".informacao.selecionado");
  informacaoSelecionada.classList.remove("selecionado");
    


  //passo 6 - mostrar o conteúdo da aba selecionada
    const idDoElentoDaInformcoesDaAba =  
    `informacao-${aba.id}`

  const informacaoASerMostrada = document.getElementById(idDoElentoDaInformcoesDaAba)
  informacaoASerMostrada.classList.add("selecionado")
 }
