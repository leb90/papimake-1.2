var content1 = `
	<div id="container" class="container align-left">
        <div class="media-container-column mbr-white col-md-12">
        <div class="tooltip1" id="circulo"> <p>I</p>
            <span class="tooltip1text">En esta opcion debes colocar tus equipos en manera de lista respetando saltos de linea, (ej:1 jugador 2 jugador)</span>
        </div>
        <textarea id="textarea" style="height: 300px"></textarea>
            <div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="randomTeamList()">Crear</a></div>
	        <div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="reload()">VOLVER</a></div>
	    </div>
    </div>`;

    var Err = `
	<div id="container" class="container align-left">
        <div class="media-container-column mbr-white col-md-12">
        <div class="alert alert-warning" style="text-align: left">
            <strong>Cuidado!</strong> estas ingresando incorrectamente la lista de los equipos.
            <br/>
            Te dejamos un ejemplo de la manera correcta:
            <br/>
            1 jugador
            <br/>
            2 jugador
            <br/>
            3 jugador
            <br/>
            4 jugador
            <br/>
            etc...
        </div>
	        <div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="makeList()">VOLVER</a></div>
	    </div>
    </div>`;

function makeList() {
    $("#container")
        .empty()
        .append(content1);
}


function randomTeamList() {
    var data = [];
    var lista = "";
    var listaParse = $("#textarea").val();
    var array = listaParse.split("\n");
    var totalPlayer = array.length;
    var halfTotalPlayer = totalPlayer / 2
    if (totalPlayer <= 1) {
        $("#container")
        .empty()
        .append(Err);
        return;
    }
    var data = shuffle(array);
  
    lista += '<div class="row col-sm-12">';
    lista += '<div class="col-sm-6 wrapper"><h2 class="mbr-white">EQUIPO 1</h2>';
    var e1 = 1;
    var e2 = 1;
    for (var i = data.length - 1; i >= 0; i--) {
      if (i < halfTotalPlayer) {
        lista +=
            `<div>
                <i class="far fa-hand-paper" style="color: white"> ${e1++}</i>
                <input type="text" class="form-control" value="${data[i]}"disabled>
            </div>`;
      }
    }
    lista += '</div><div class="col-sm-6"><h2 class="mbr-white">EQUIPO 2</h2>';
    for (var i = data.length - 1; i >= 0; i--) {
      if (i >= halfTotalPlayer) {
        lista +=
        `<div>
            <i class="far fa-hand-paper" style="color: white"> ${e2++}</i>
            <input type="text" class="form-control" value="${data[i]}"disabled>
        </div>`;
      }
    }
    lista +=
      '</div></div><div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="reload()">Volver</a></div>';
  
    $("#container")
      .empty()
      .append(lista);
  }