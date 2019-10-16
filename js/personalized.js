var arq = "";
var def = "";
var med = "";
var atq = "";
var data = {};
var total = 0;
var mitad = 0;
var team1 = [];
var team2 = [];
var finalContent = "";
var content = `
		<div>
		  	<div class="container">
				<div class="row" style="padding-bottom: 15px;">
					<div class="col-sm-6 mbr-white display-5">Arqueros</div>
					<div class="col-sm-6"><input type="number" class="form-control" id="arquero" min="0" max="2" value="0" placeholder="Cantidad"></div>

				</div>
				<div class="row" style="padding-bottom: 15px;">
					<div class="col-sm-6 mbr-white display-5">Defensas</div>
					<div class="col-sm-6"><input type="number" class="form-control" id="defensa" min="0" max="10" value="0" placeholder="Cantidad"></div>

				</div>
				<div class="row" style="padding-bottom: 15px;">
					<div class="col-sm-6 mbr-white display-5">Mediocampistas</div>
					<div class="col-sm-6"><input type="number" class="form-control" id="mediocampo" min="0" max="10" value="0" placeholder="Cantidad"></div>

				</div>
				<div class="row" style="padding-bottom: 15px;">
					<div class="col-sm-6 mbr-white display-5">Delanteros</div>
					<div class="col-sm-6"><input type="number" class="form-control" id="delantero" min="0" max="10" value="0" placeholder="Cantidad"></div>

				</div>
			</div>  

				<div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="quantity()">Crear</a></div>
				<div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="reload()">Volver</a></div>

	    </div>`;

function makeP() {
  $("#container")
    .empty()
    .append(content);
}

function quantity() {
  data = {
    arquero: $("#arquero").val(),
    defensa: $("#defensa").val(),
    mediocampo: $("#mediocampo").val(),
    delantero: $("#delantero").val()
  };
  makeTeamArq(data);
  total =
    parseInt(data.arquero) +
    parseInt(data.defensa) +
    parseInt(data.mediocampo) +
    parseInt(data.delantero);
  mitad = total / 2;
}

function makeTeamArq(data) {
  arq += '<div style="padding-top: 15px;"><div>';
  if (data.arquero == 0) {
    makeTeamDef(data);
  } else {
    for (var i = parseInt(data.arquero) - 1; i >= 0; i--) {
      arq +=
        '<div class="row" style="padding-bottom: 15px;"><div class="col-sm-6 mbr-white display-5">Arquero </div><div class="col-sm-6"><input type="text" class="form-control" id="arquero' +
        (i + 1) +
        '" ></div></div>';
    }

    arq +=
      '</div><div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="makeTeamDef(data)">Siguiente</a></div></div>';

    $("#container")
      .empty()
      .append(arq);
  }
}

function makeTeamDef(data) {
  if ($("#arquero1").val() != undefined) {
    team1.push($("#arquero1").val());
  }
  if ($("#arquero2").val() != undefined) {
    team2.push($("#arquero2").val());
  }

  def += '<div style="padding-top: 15px;"><div>';
  if (parseInt(data.defensa) == 0) {
    makeTeamMed(data);
  } else {
    for (var i = parseInt(data.defensa) - 1; i >= 0; i--) {
      def +=
        '<div class="row" style="padding-bottom: 15px;"><div class="col-sm-6 mbr-white display-5">Defensa </div><div class="col-sm-6"><input type="text" class="form-control" id="defensa' +
        (i + 1) +
        '" ></div></div>';
    }

    def +=
      '</div><div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="makeTeamMed(data)">Siguiente</a></div></div>';

    $("#container")
      .empty()
      .append(def);
  }
}

function makeTeamMed(data) {
  if (parseInt(data.defensa) >= 1) {
    var mitadDef = parseInt(data.defensa) / 2;

    for (var i = parseInt(data.defensa) - 1; i >= 0; i--) {
      if ($("#defensa" + (i + 1)).val() != undefined && i + 1 <= mitadDef) {
        team1.push($("#defensa" + (i + 1)).val());
      }
      if ($("#defensa" + (i + 1)).val() != undefined && i + 1 > mitadDef) {
        team2.push($("#defensa" + (i + 1)).val());
      }
    }
  }

  med += '<div style="padding-top: 15px;"><div>';
  if (parseInt(data.mediocampo) == 0) {
    makeTeamAtq(data);
  } else {
    for (var i = parseInt(data.mediocampo) - 1; i >= 0; i--) {
      med +=
        '<div class="row" style="padding-bottom: 15px;"><div class="col-sm-6 mbr-white display-5">Mediocampista </div><div class="col-sm-6"><input type="text" class="form-control" id="mediocampo' +
        (i + 1) +
        '" ></div></div>';
    }

    med +=
      '</div><div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="makeTeamAtq(data)">Siguiente</a></div></div>';

    $("#container")
      .empty()
      .append(med);
  }
}

function makeTeamAtq(data) {
  if (parseInt(data.mediocampo) >= 1) {
    var mitadDef = parseInt(data.mediocampo) / 2;

    for (var i = parseInt(data.mediocampo) - 1; i >= 0; i--) {
      if ($("#mediocampo" + (i + 1)).val() != undefined && i + 1 <= mitadDef) {
        team1.push($("#mediocampo" + (i + 1)).val());
      }
      if ($("#mediocampo" + (i + 1)).val() != undefined && i + 1 > mitadDef) {
        team2.push($("#mediocampo" + (i + 1)).val());
      }
    }
  }

  atq += '<div style="padding-top: 15px;"><div>';
  if (parseInt(data.delantero) == 0) {
    randomTeamF(data);
  } else {
    for (var i = parseInt(data.delantero) - 1; i >= 0; i--) {
      atq +=
        '<div class="row" style="padding-bottom: 15px;"><div class="col-sm-6 mbr-white display-5">Delantero </div><div class="col-sm-6"><input type="text" class="form-control" id="delantero' +
        (i + 1) +
        '" ></div></div>';
    }

    atq +=
      '</div><div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="randomTeamF(data)">Siguiente</a></div></div>';

    $("#container")
      .empty()
      .append(atq);
  }
}

function randomTeamF(data) {
  if (data.delantero != undefined) {
    if (parseInt(data.delantero) >= 1) {
      var mitadDef = parseInt(data.delantero) / 2;

      for (var i = parseInt(data.delantero) - 1; i >= 0; i--) {
        if ($("#delantero" + (i + 1)).val() != undefined && i + 1 <= mitadDef) {
          team1.push($("#delantero" + (i + 1)).val());
        }
        if ($("#delantero" + (i + 1)).val() != undefined && i + 1 > mitadDef) {
          team2.push($("#delantero" + (i + 1)).val());
        }
      }
    }
  }
  paint();
}

function paint() {
  finalContent += '<div class="row col-sm-12">';
  finalContent += '<div class="col-sm-6"><h2 class="mbr-white">EQUIPO 1</h2>';
  for (var i = team1.length - 1; i >= 0; i--) {
    finalContent +=
      '<input type="text" class="form-control" value="' +
      team1[i] +
      '" disabled>';
  }
  finalContent +=
    '</div><div class="col-sm-6"><h2 class="mbr-white">EQUIPO 2</h2>';
  for (var i = team2.length - 1; i >= 0; i--) {
    finalContent +=
      '<input type="text" class="form-control" value="' +
      team2[i] +
      '" disabled>';
  }
  finalContent +=
    '</div></div><div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="reload()">Volver</a></div>';
  $("#container")
    .empty()
    .append(finalContent);
}
