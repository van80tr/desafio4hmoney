<?php
require_once("vendor/autoload.php");

use Src\model\Cliente;

if (isset($_POST['action']) && !empty($_POST['action'])) {
  if ($_POST['action'] == "selectAllCli") {
    $result = new Cliente();
    $resp = $result->selectAllCli();
    echo json_encode($resp);
    exit();
  } else if ($_POST['action'] == "insertCli") {
    if (!empty($_POST['nomeCli'])) {
      if (!empty($_POST['cpf'])) {

        $newCli = new Cliente();
        $resp =  $newCli->cadastrarCleinte($_POST);
        if ($resp["codigo"] == 200) {
          $resp = $newCli->selectAllCli();
        }
        echo json_encode($resp);
        exit();
      } else {
        $resp = array('codigo' => 500, 'mensagem' => 'Cpf é um  campo obrigatório!');
        echo json_encode($resp);
        exit();
      }
    } else {

      $resp = array('codigo' => 500, 'mensagem' => 'Nome é um  campo obrigatório!');
      echo json_encode($resp);
      exit();
    }
  } else if ($_POST['action'] == "selectSumCli") {
    $result = new Cliente();
    $resp = $result->selectSumCli();
    echo json_encode($resp);
    exit();
  } else if ($_POST['action'] == "updateCli") {
    if (isset($_POST['param']) && !empty($_POST['param'])) {
      $param = intval($_POST['param']);
      $result = new Cliente();
      $resp = $result->selectAllCliid($param);
      echo json_encode($resp);
      exit();
    } else {
      $resp = array('codigo' => 500, 'mensagem' => 'Erro inesperado');
      echo json_encode($resp);
      exit();
    }
  } else if ($_POST['action'] == "saveupdateCli") {
    $result = new Cliente();
    $resp = $result->alterarCliente($_POST);
    if ($resp["codigo"] == 200) {
      $resp = $result->selectAllCli();
    }

    echo json_encode($resp);
    exit();
  } else if ($_POST['action'] == "delCli") {
    $result = new Cliente();
    $resp = $result->deleteCliente($_POST);
    if ($resp["codigo"] == 200) {
      $resp = $result->selectAllCli();
    }

    echo json_encode($resp);
    exit();
  } else {
    $resp = array('codigo' => 500, 'mensagem' => 'Erro inesperado');
    echo json_encode($resp);
    exit();
  }
} else {

  $resp = array('codigo' => 500, 'mensagem' => 'passou direto -' . $_POST['action']);
  echo json_encode($resp);
  exit();
}
