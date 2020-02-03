class DashBodyController {
  constructor(btnMenu) {
    this.removeSelect();
    btnMenu.classList.add("active");

  }

  removeSelect() {
    btnMenuDashboard.classList.remove("active");
    btnMenuCliente.classList.remove("active");

  }
  getAllCli(dashBody) {
    var data = {
      "action": "selectAllCli"
    };

    this.sendAjax(data, this.setAllCli, dashBody);
  }
  setAllCli(resp, dashBody) {
    dashBody.innerHTML = DashBodyViews.getTableDashCli(resp);
    $('.cpf').mask('000.000.000-00', { reverse: true });
  }

  setCli(form, dashBody) {
    var data = {};
    data["action"] = "insertCli";
    form.forEach((dado, index) => {

      data[dado.name] = dado.value;

    });

    this.sendAjax(data, this.setAllCli, dashBody);


  }



  setupCli(form, id, dashBody) {
    var data = {};
    data["action"] = "saveupdateCli";
    data["id"] = id;
    form.forEach((dado, index) => {

      data[dado.name] = dado.value;

    });

    this.sendAjax(data, this.setAllCli, dashBody);


  }

  getSumCli(dashBody) {
    var data = {
      "action": "selectSumCli"
    };

    this.sendAjax(data, this.setSumCli, dashBody);
  }
  setSumCli(resp, dashBody) {
    dashBody.innerHTML = DashBodyViews.getHomeDash(resp);
  }
  upCli(param, dashBody) {
    var data = {
      "action": "updateCli",
      "param": param
    };
    this.sendAjax(data, this.getUpCli, dashBody);

  }
  getUpCli(resp, dashBody) {

    dashBody.innerHTML = DashBodyViews.getFormUpDashCli(resp);
    $('.cpf').mask('000.000.000-00', { reverse: true });
    $('.cep').mask('00000-000');

  }
  delCli(param, dashBody) {
    var data = {
      "action": "delCli",
      "id": param
    };
    this.sendAjax(data, this.setAllCli, dashBody);

  }


  sendAjax(data, metodo, dashBody) {

    $.ajax({
      type: 'POST',
      url: 'controller.php',
      data: data,
      dataType: 'json',
      beforeSend: function () {
        //	$("#preload").delay(0).fadeIn("slow");
      },
      success: function (response) {
        if (typeof (response.codigo) != "undefined" && response.codigo == "200") {
          alert(response.mensagem);
          return;
        } else if (typeof (response.codigo) != "undefined" && response.codigo == "500") {
          alert(response.mensagem);
        } else {

          metodo(response, dashBody);
          // console.log(response);


        }
      }
    });

  }
}