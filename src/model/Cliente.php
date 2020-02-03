<?php

namespace Src\model;

use CURLFile;
use Src\bd\Crud;

class Cliente
{
  public function cadastrarCleinte($data = array())
  {

    $sql = new Crud();
    $sql->query("INSERT INTO cliente(nome,endereco,numero,bairro,cidade,uf,cep,email,cpf)
                   VALUES(:nome,:endereco,:numero,:bairro,:cidade,:uf,:cep,:email,:cpf)", array(
      ":nome" => $data['nomeCli'],
      ":endereco" => $data['endereco'],
      ":numero" => $data['numero_endereco'],
      ":bairro" => $data['bairro'],
      ":cidade" => $data['cidade'],
      ":uf" => $data['uf'],
      ":cep" => $data['cep'],
      ":email" => $data['emailCli'],
      ":cpf" => $data['cpf']
    ));
    return  array('codigo' => 200, 'mensagem' => 'Cadastro efetuado com sucesso!');
  }
  public function alterarCliente($data = array())
  {
    $id = intval($data['id']);
    if (is_int($id)) {
      $sql = new Crud();
      $sql->query("UPDATE cliente SET nome = :nome,endereco = :endereco,numero = :numero,bairro = :bairro,
          cidade =:cidade,uf = :uf,cep = :cep,email = :email, cpf = :cpf WHERE id = :id;
", array(
        ":nome" => $data['nomeCli'],
        ":endereco" => $data['endereco'],
        ":numero" => $data['numero_endereco'],
        ":bairro" => $data['bairro'],
        ":cidade" => $data['cidade'],
        ":uf" => $data['uf'],
        ":cep" => $data['cep'],
        ":email" => $data['emailCli'],
        ":cpf" => $data['cpf'],
        ":id" => $id
      ));


      return  array('codigo' => 200, 'mensagem' => 'Cadastro efetuado com sucesso!');
    } else {
      return  array('codigo' => 500, 'mensagem' => 'Erro inesperado!');
    }
  }
  public function deleteCliente($data = array())
  {
    $id = intval($data['id']);
    if (is_int($id)) {
      $sql = new Crud();
      $sql->query("DELETE FROM cliente WHERE id=:id ", array(
        ":id" => $id
      ));
      return  array('codigo' => 200, 'mensagem' => 'Excluido efetuado com sucesso!');
    } else {
      return  array('codigo' => 500, 'mensagem' => 'Erro inesperado!');
    }
  }

  public function selectAllCli()
  {
    $sql = new Crud();
    $result = $sql->select("SELECT * FROM cliente;", array());
    return  $result;
  }
  public function selectSumCli()
  {
    $sql = new Crud();
    $result = $sql->select("SELECT count( *) as total FROM cliente;", array());
    return  $result;
  }
  public function selectAllCliid($param)
  {
    if (is_int($param)) {
      $sql = new Crud();
      $result = $sql->select("SELECT  * FROM cliente WHERE id=:id", array(
        ":id" => $param
      ));
    } else {
      $result = array('codigo' => 500, 'mensagem' => 'Erro inesperado');
    }
    return $result;
  }
}
