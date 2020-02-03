class CepView {

    static getcepinvalido(){
        return `<div class="row justify-content-center">
        <div class="alert alert-danger alert-dismissible fade show col-lg-6" role="alert">
        <strong>Atenção</strong> Formato de CEP inválido.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
         </button>
        </div></div>`;
    }
    static getcepnull(){
        return `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Atenção!!</strong> O CEP não foi informado!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
    }
    static getceperro(){
        return `<div class="row justify-content-center"><div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Atenção</strong> CEP não encontrado na base de dados viaCep.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
     <span aria-hidden="true">&times;</span>
     </button>
    </div></div> `;
    }
    
    static getCepCliente(conteudo){
        return `<div class="form-row">
        <div class="form-group col-md-10">
          <label for="inputEnd">Lougradouro</label>
          <input type="text" class="form-control" id="inputEnd" name="endereco" placeholder="Rua dos Bobos" value="`+conteudo.logradouro+`">
        </div>
        <div class="form-group col-md-2">
          <label for="inputNum">Nº</label>
          <input type="text" class="form-control" id="inputNum" name="numero_endereco" >
        </div>
        </div>
      
        <div class="form-row">
          <div class="form-group col-md-5">
            <label for="inputBairro">Bairro</label>
            <input type="text" class="form-control" id="inputBairro" name="bairro" value="`+conteudo.bairro+`">
          </div>
          <div class="form-group col-md-5">
            <label for="inputCidade">Cidade</label>
            <input type="text" class="form-control" id="inputCidade" name="cidade" value="`+conteudo.localidade+`">
          </div>
          <div class="form-group col-md-2">
            <label for="inputEstado">Estado</label>
            <input type="text" class="form-control" id="inputEstado" name="uf" value="`+conteudo.uf+`">
          </div>`;
    }
    static getFormEnd(){
        return `<div class="form-row">
        <div class="form-group col-md-10">
          <label for="inputEnd">Lougradouro</label>
          <input type="text" class="form-control" id="inputEnd" name="endereco" placeholder="Rua dos Bobos" >
        </div>
        <div class="form-group col-md-2">
          <label for="inputNum">Nº</label>
          <input type="text" class="form-control" id="inputNum" name="numero_endereco" >
        </div>
        </div>
      
        <div class="form-row">
          <div class="form-group col-md-5">
            <label for="inputBairro">Bairro</label>
            <input type="text" class="form-control" id="inputBairro" name="bairro" >
          </div>
          <div class="form-group col-md-5">
            <label for="inputCidade">Cidade</label>
            <input type="text" class="form-control" id="inputCidade" name="cidade" >
          </div>
          <div class="form-group col-md-2">
            <label for="inputEstado">Estado</label>
            <input type="text" class="form-control" id="inputEstado" name="uf" >
          </div>`;
    }
}