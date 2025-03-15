    //definicao variavel
    let lista = document.getElementById('listaAmigos'); 

    let resultado = document.getElementById('resultado');
    
    let amigos = [];

    //fun para add o amigo
    function adicionarAmigo(){
        let nome = document.getElementById('amigo').value;

        //verificacao para saber se nome é nulo ou se esta na lista 
        // caso seja um dos dois retorna a fun pedindo para colocar um valor valido
        if (nome === "" ) {
            return alert("Colocar um nome valido!");
        } else if( amigos.includes(nome)){
            return alert("Coloque um nome que não esteja na lista");
        }
        //add amigo na lista
        amigos.push(nome);
        
        console.log(amigos);

        atualizarAmigos();
        

        document.getElementById('amigo').value = "";
        
    }

    //fun para att a lista
    function atualizarAmigos(){
        lista.innerHTML = "";

       //atualizacao da lista
        for (let i = 0; i < amigos.length; i++) {
            
                let li = document.createElement('li');//criando um li para mostrar a lista
                li.textContent = amigos[i];//adicionando o nome ao li
                
                lista.appendChild(li);//mostrando o li 
                
        }
    }

    function sortearAmigo(){
        let amigoSorteado = parseInt(Math.random() * amigos.length);//sorteio do numero usado como indice para mostrar o amigo

        //console.log(amigoSorteado)
        
        resultado.innerHTML = `Seu amigo secreto é: ${amigos[amigoSorteado]}`;

        
    }

   