class cepController{
    constructor(valor,end){
        var msg =document.querySelector("#msg");
       var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Mensagem enquanto agaurda  consulta webservice.
             
                end.innerHTML="Por favor  aguarde >>>>";

                var script = document.createElement('script');

                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=cepController.clienteCallback';
                
                document.body.appendChild(script);
           

            } //end if.
            else {
                
                 
                msg.innerHTML= CepView.getcepinvalido() ;
            }
        } //end if.
        else {
              
            msg.innerHTML= CepView.getcepnull();
        }
   
    }

static clienteCallback(conteudo) {
    var end =document.querySelector("#txtend");
    var msg =document.querySelector("#msg");
    
  if (!("erro" in conteudo)) {
     end.innerHTML= CepView.getCepCliente(conteudo);
  } //end if.
  else {
      //CEP não Encontrado.
    
      msg.innerHTML= CepView.getceperro();
      end.innerHTML= CepView.getFormEnd();
  }
}
}