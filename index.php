<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
  <meta name="generator" content="Jekyll v3.8.5">
  <title>Dashboard Template · Bootstrap</title>

  <link rel="canonical" href="https://getbootstrap.com/docs/4.2/examples/dashboard/">

  <!-- Bootstrap core CSS -->
  <link href="resouce/css/bootstrap.min.css" rel="stylesheet">


  <style>
    .bd-placeholder-img {
      font-size: 1.125rem;
      text-anchor: middle;
    }

    @media (min-width: 768px) {
      .bd-placeholder-img-lg {
        font-size: 3.5rem;
      }
    }
  </style>
  <!-- Custom styles for this template -->
  <link href="resouce/css/dashboard.css" rel="stylesheet">
</head>

<body>
  <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Minha Empresa</a>
    <input class="form-control form-control-dark w-100" type="text" placeholder="" aria-label="Search">
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link" href="#">Sair</a>
      </li>
    </ul>
  </nav>

  <div class="container-fluid">
    <div class="row">
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#" id="btnMenuDashboard">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Dashboard <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="btnMenuCliente">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
                Cliente
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4" id="dashBody">



      </main>
    </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <script>
    window.jQuery || document.write('<script src="/docs/4.2/assets/js/vendor/jquery-slim.min.js"><\/script>')
  </script>
  <script src="resouce/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.9.0/feather.min.js"></script>
  <script src="lib/js/jquery.mask.js"></script>
  <script src="resouce/js/DashBodyViews.js"></script>
  <script src="resouce/js/DashBodyController.js"></script>
  <script src="resouce/js/CepView.js"></script>
  <script src="resouce/js/cepController.js"></script>
</body>

<script>
  var
    dashBody = document.querySelector("#dashBody");
  btnMenuCliente = document.querySelector("#btnMenuCliente");
  btnMenuDashboard = document.querySelector("#btnMenuDashboard");
  $(document).ready(function() {
    homeDash = new DashBodyController(btnMenuDashboard);
    homeDash.getSumCli(dashBody);
  });



  btnMenuCliente.addEventListener("click", function() {
    clienteDash = new DashBodyController(btnMenuCliente);
    clienteDash.getAllCli(dashBody);
  });

  btnMenuDashboard.addEventListener("click", function() {
    location.reload();
  });


  function newCustomer() {
    dashBody.innerHTML = DashBodyViews.getFormNewDashCli();
    $('.cpf').mask('000.000.000-00', {
      reverse: true
    });
    $('.cep').mask('00000-000');
  }

  function pesquisaclicep(valor) {
    var end = document.querySelector("#txtend");
    cepcliente = new cepController(valor, end);

  }

  function registrar_Cliente() {

    var form = document.querySelectorAll("#cad_cli [name]");
    clienteDash.setCli(form, dashBody);


  }

  function alterCliente(id) {
    var form = document.querySelectorAll("#cad_cli [name]");

    clienteDash.setupCli(form, id, dashBody);


  }

  function updateCli(param) {
    clienteDash.upCli(param, dashBody);

  }

  function deleteCli(param) {
    clienteDash.delCli(param, dashBody);

  }
</script>

</html>