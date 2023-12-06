//funcions
function boto() {
  var noubto = document.createElement('button');
  noubto.innerHTML='El teu boto'; //amb aixo afageixes text dints del boto pero tmb ho pots fer amb noubto.textcontent = 'el q vuilguis
  noubto.setAttribute("src", "./scripts.js");
  document.body.appendChild(noubto);

}
function resselect() {
  return alert("Has de seleccionar algo siusplau.");
  
}





var seleccionant = document.getElementById('selecciotipius');
seleccionant.addEventListener('change', function() {
  var infoseleccio = seleccionant.options[seleccionant.selectedIndex].value;
  if (infoseleccio === '') {
    console.log("error aixo es del de res");
    resselect();
  }
  else if (infoseleccio === 'boto') {
    boto();
  }
});





/*
var elbuto = document.getElementById('mesbtns');

elbuto.addEventListener('click', function() {
  var tipuselement = document.getElementById('tipusele').value;
  var nouele = document.createElement(tipuselement);
  var contele = document.getElementById('contele').value;
  var stylech = document.getElementById('stylech');
  var select = document.getElementById('selection');

  nouele.textContent = contele;
  if (stylech.checked) {
    console.log(contele);
    nouele.style.color = 'blue';
  }
  else {
    nouele.style.color = 'none';
    console.log(nouele);
  }
    var totesOpcions = select.selectedIndex;
    var opSelect = select.options[totesOpcions].value;
  
  if (opSelect === 'color') {
    mesbtns.style.color = 'purple';
  }
  else if (opSelect === "size") {
    nouele.style.fontSize = '40px';
    nouele.style.left = '50px'
  }
  else {
    console.log('error')
    alert("Error")
  }
  document.body.appendChild(nouele);
});
*/