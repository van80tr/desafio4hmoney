class DashBodyViews {
  static getHomeDash(resp) {
    var sumCli = "";
    resp.forEach((data, index) => {
      sumCli = `<h3> Total de cliente: ` + data.total + `</h3>`;
    });
    return `<div
    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Dashboard</h1>

  </div>
  <div>
    `+ sumCli + `
  </div>`;
  }
  static getTableDashCli(resp) {
    var trbody = "";
    resp.forEach((data, index) => {
      trbody += ` <tr>
      <td>`+ data.id + `</td>
      <td>`+ data.nome + `</td>
      <td>`+ data.email + `</td>
      <td>`+ data.endereco + `, ` + data.numero + `</td>
      <td class="cpf">`+ data.cpf + `</td>
     <td><button type="button" class="btn btn-primary btn-sm mr-1" onclick="updateCli(`+ data.id + `)">Editar</button></td>
     <td><button type="button" class="btn btn-danger btn-sm" onclick="deleteCli(`+ data.id + `)">Excluir</button></td>
    </tr>`
    });

    return `<div
  class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
  <h1 class="h2">Cliente</h1>
 
</div>
  <div >
    <button onclick="newCustomer()"class="btn btn-light mb-2 float-right"> Cadastrar +</button>
  </div>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Endereço</th>
          <th>CPF</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
       `+ trbody + `
      </tbody>
    </table>
  </div>`;
  }

  static getFormNewDashCli() {
    return `<div
  class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
  <h1 class="h2">Cadastro de cliente</h1>
 </div>
 <div>
  <form name="form_cad_cli"   id="cad_cli" action=" " method="post" enctype="multipart/form-data">
    <div class="form-group">
<label for="inputNome">Nome</label>
<input type="text" class="form-control" id="Nome" name="nomeCli" placeholder="Nome do cliente" required="required">
</div>
<div class="form-row">
<div class="form-group col-md-6">
<label for="inputcpf">CPF</label>
<input type="text" class="form-control cpf" id="inputcpf" name="cpf" placeholder="000.000.000-00">
</div>
<div class="form-group col-md-6">
<label for="inputEmail4">Email</label>
<input type="email" class="form-control" id="inputEmail4" name="emailCli" placeholder="Email">
</div>

</div>
<h3>Endereço</h3>
<div class="form-row">

<div class="form-group col-md-2">
<label for="inputCEP">CEP</label>
<input type="text" class="form-control cep" id="cep_end" name="cep"   onblur="pesquisaclicep(this.value)">
</div>
<div class="form-group col-md-10">
<div id="msg" >
</div>
</div>
</div>

<div id="txtend">
<div class="form-row">
<div class="form-group col-md-10">
<label for="inputEnd">Lougradouro</label>
<input type="text" class="form-control" id="inputEnd" name="endereco" placeholder="Rua dos Bobos, nº 0">
</div>
<div class="form-group col-md-2">
<label for="inputNum">Nº</label>
<input type="text" class="form-control" id="inputNum" name="numero_endereco" >
</div>
</div>

<div class="form-row">
<div class="form-group col-md-5">
<label for="inputBairro">Bairro</label>
<input type="text" class="form-control" id="inputBairro" name="bairro">
</div>
<div class="form-group col-md-5">
<label for="inputCidade">Cidade</label>
<input type="text" class="form-control" id="inputCidade" name="cidade">
</div>
<div class="form-group col-md-2">
<label for="inputEstado">Estado</label>
<input type="text" class="form-control" id="inputEstado" name="uf">
</div>

</div>
</div>
<button type="button" class="btn btn-primary" id="btnSalvar" onclick="registrar_Cliente()">Salvar</button>
</form>
 </div>`;
  }


  static getFormUpDashCli(resp) {
    var form = "";
    resp.forEach((data, index) => {
      form = `<form name="form_cad_cli"   id="cad_cli" action=" " method="post" enctype="multipart/form-data">
      <div class="form-group">
      <label for="inputNome">Nome</label>
      <input type="text" class="form-control" id="Nome" name="nomeCli" placeholder="Nome do cliente" required="required" value="`+ data.nome + `">
      </div>
      <div class="form-row">
      <div class="form-group col-md-6">
      <label for="inputcpf">CPF</label>
      <input type="text" class="form-control cpf" id="inputcpf" name="cpf" placeholder="000.000.000-00"value="`+ data.cpf + `">
      </div>
      <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" name="emailCli" placeholder="Email" value="`+ data.email + `">
      </div>
      
      </div>
      <h3>Endereço</h3>
      <div class="form-row">
      
      <div class="form-group col-md-2">
      <label for="inputCEP">CEP</label>
      <input type="text" class="form-control cep" id="cep_end" name="cep"  value="`+ data.cep + `"  onblur="pesquisaclicep(this.value)">
      </div>
      <div class="form-group col-md-10">
      <div id="msg" >
      </div>
      </div>
      </div>
      
      <div id="txtend">
      <div class="form-row">
      <div class="form-group col-md-10">
      <label for="inputEnd">Lougradouro</label>
      <input type="text" class="form-control" id="inputEnd" name="endereco" placeholder="Rua dos Bobos, nº 0" value="`+ data.endereco + `">
      </div>
      <div class="form-group col-md-2">
      <label for="inputNum">Nº</label>
      <input type="text" class="form-control" id="inputNum" name="numero_endereco" value="`+ data.numero + `" >
      </div>
      </div>
      
      <div class="form-row">
      <div class="form-group col-md-5">
      <label for="inputBairro">Bairro</label>
      <input type="text" class="form-control" id="inputBairro" name="bairro" value="`+ data.bairro + `">
      </div>
      <div class="form-group col-md-5">
      <label for="inputCidade">Cidade</label>
      <input type="text" class="form-control" id="inputCidade" name="cidade" value="`+ data.cidade + `">
      </div>
      <div class="form-group col-md-2">
      <label for="inputEstado">Estado</label>
      <input type="text" class="form-control" id="inputEstado" name="uf" value="`+ data.uf + `">
      
      </div>
      <div class="form-group col-md-2">
     <input type="hidden" class="form-control" id="inputid" name="id" value="`+ data.id + `">
      </div>
      </div>
      </div>
   
     <button type="button" class="btn btn-primary" id="btnSalvar" onclick="alterCliente(`+ data.id + `)">Salvar</button>
  </form>`;
    });

    return `<div
  class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
  <h1 class="h2">Alterar dados de cliente</h1>
 </div>
 <div>
  
   `+ form + `

 </div>`;
  }
}