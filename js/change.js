var newcontent = `
	<div id="container" class="container align-left">
	    <div class="media-container-column mbr-white col-md-12">
	        <div><a class="btn btn-md btn-white display-4" onclick="make5v5()">CREA EQUIPO 5vs5</a></div>
	        <div><a class="btn btn-md btn-white display-4" onclick="make6v6()">CREA EQUIPO 6vs6</a></div>
	        <div><a class="btn btn-md btn-white display-4" onclick="make7v7()">CREA EQUIPO 7vs7</a></div>
	        <div><a class="btn btn-md btn-white display-4" onclick="makeList()">AGREGAR EQUIPO EN LISTA</a></div>
	        <div><a class="btn btn-md btn-white display-4" onclick="makeP()">CREA EQUIPO PERSONALIZADO</a></div>
	        <div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="reload()">VOLVER</a></div>
	    </div>
	</div>`;
var v5content = `
	    <div  style="padding-top: 15px;">
	    	<form id="myForm">
	     		<div class="row col-sm-12">
			     	
				    	<div class="col-sm-6">
				          	<input type="text" class="form-control" id="name1" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name2" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name3" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name4" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name5" placeholder="Nombre">

				        </div>
				    	<div class="col-sm-6">
				          	<input type="text" class="form-control" id="name6" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name7" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name8" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name9" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name10" placeholder="Nombre">
				        </div>				     
				</div>
				<div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="randomTeam5()">Crear</a></div>
				<div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="reload()">Volver</a></div>
			</form>
	    </div>
`;
var v6content = `
	    <div  style="padding-top: 15px;">
	    	<form id="myForm">
	     		<div class="row col-sm-12">
			     	
				    	<div class="col-sm-6">
				          	<input type="text" class="form-control" id="name1" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name2" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name3" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name4" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name5" placeholder="Nombre">

				          	<input type="text" class="form-control" id="name6" placeholder="Nombre">
				        </div>
				    	<div class="col-sm-6">
				
				          	<input type="text" class="form-control" id="name7" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name8" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name9" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name10" placeholder="Nombre">

				          	<input type="text" class="form-control" id="name11" placeholder="Nombre">

				          	<input type="text" class="form-control" id="name12" placeholder="Nombre">
				        </div>			        					     
				</div>
				<div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="randomTeam6()">Crear</a></div>
				<div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="reload()">Volver</a></div>
			</form>
	    </div>
`;

var v7content = `
	    <div  style="padding-top: 15px;">
	    	<form id="myForm">
	     		<div class="row col-sm-12">
			     	
				    	<div class="col-sm-6">
				          	<input type="text" class="form-control" id="name1" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name2" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name3" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name4" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name5" placeholder="Nombre">

				          	<input type="text" class="form-control" id="name6" placeholder="Nombre">

				          	<input type="text" class="form-control" id="name7" placeholder="Nombre">
				        </div>
				    	<div class="col-sm-6">
				
				          	<input type="text" class="form-control" id="name8" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name9" placeholder="Nombre">
				
				          	<input type="text" class="form-control" id="name10" placeholder="Nombre">

				          	<input type="text" class="form-control" id="name11" placeholder="Nombre">

				          	<input type="text" class="form-control" id="name12" placeholder="Nombre">

				          	<input type="text" class="form-control" id="name13" placeholder="Nombre">

							<input type="text" class="form-control" id="name14" placeholder="Nombre">
				        </div>				     
				</div>
				<div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="randomTeam7()">Crear</a></div>
				<div class="col-sm-12"><a class="btn btn-md btn-white display-4"  onclick="reload()">Volver</a></div>
			</form>
	    </div>
`;

function randomTeam5() {
  var data = [];
  var lista = "";
  var array = [
    $("#name1").val(),
    $("#name2").val(),
    $("#name3").val(),
    $("#name4").val(),
    $("#name5").val(),
    $("#name6").val(),
    $("#name7").val(),
    $("#name8").val(),
    $("#name9").val(),
    $("#name10").val()
  ];
  var data = shuffle(array);
    var e1 = 1;
    var e2 = 1;
  lista += '<div class="row col-sm-12">';
  lista += '<div class="col-sm-6"><h2 class="mbr-white">EQUIPO 1</h2>';

  for (var i = data.length - 1; i >= 0; i--) {
    if (i <= 4) {
      lista +=
            `<div>
                <i class="far fa-hand-paper" style="color: white"> ${e1++}</i>
                <input type="text" class="form-control" value="${data[i]}"disabled>
            </div>`;
    }
  }
  lista += '</div><div class="col-sm-6"><h2 class="mbr-white">EQUIPO 2</h2>';
  for (var i = data.length - 1; i >= 0; i--) {
    if (i >= 5) {
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

function randomTeam6() {
  var data = [];
  var lista = "";
  var array = [
    $("#name1").val(),
    $("#name2").val(),
    $("#name3").val(),
    $("#name4").val(),
    $("#name5").val(),
    $("#name6").val(),
    $("#name7").val(),
    $("#name8").val(),
    $("#name9").val(),
    $("#name10").val(),
    $("#name11").val(),
    $("#name12").val()
  ];
  var data = shuffle(array);
    var e1 = 1;
    var e2 = 1;
  lista += '<div class="row col-sm-12">';
  lista += '<div class="col-sm-6"><h2 class="mbr-white">EQUIPO 1</h2>';

  for (var i = data.length - 1; i >= 0; i--) {
    if (i <= 5) {
      lista +=
            `<div>
                <i class="far fa-hand-paper" style="color: white"> ${e1++}</i>
                <input type="text" class="form-control" value="${data[i]}"disabled>
            </div>`;
    }
  }
  lista += '</div><div class="col-sm-6"><h2 class="mbr-white">EQUIPO 2</h2>';
  for (var i = data.length - 1; i >= 0; i--) {
    if (i >= 6) {
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

function randomTeam7() {
  var data = [];
  var lista = "";
  var array = [
    $("#name1").val(),
    $("#name2").val(),
    $("#name3").val(),
    $("#name4").val(),
    $("#name5").val(),
    $("#name6").val(),
    $("#name7").val(),
    $("#name8").val(),
    $("#name9").val(),
    $("#name10").val(),
    $("#name11").val(),
    $("#name12").val(),
    $("#name13").val(),
    $("#name14").val()
  ];
  var data = shuffle(array);
    var e1 = 1;
    var e2 = 1;
  lista += '<div class="row col-sm-12">';
  lista += '<div class="col-sm-6"><h2 class="mbr-white">EQUIPO 1</h2>';

  for (var i = data.length - 1; i >= 0; i--) {
    if (i <= 6) {
      lista +=
            `<div>
                <i class="far fa-hand-paper" style="color: white"> ${e1++}</i>
                <input type="text" class="form-control" value="${data[i]}"disabled>
            </div>`;
    }
  }
  lista += '</div><div class="col-sm-6"><h2 class="mbr-white">EQUIPO 2</h2>';
  for (var i = data.length - 1; i >= 0; i--) {
    if (i >= 7) {
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

function reload() {
  location.reload();
}

function makeTeam() {
  $("#container")
    .empty()
    .append(newcontent);
}
function make5v5() {
  $("#container")
    .empty()
    .append(v5content);
}
function make6v6() {
  $("#container")
    .empty()
    .append(v6content);
}
function make7v7() {
  $("#container")
    .empty()
    .append(v7content);
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
