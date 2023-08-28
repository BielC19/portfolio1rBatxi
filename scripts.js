import {resselect, boto}from './funcionss'
var seleccionant = document.getElementById('selecciotipius');
seleccionant.addEventListener('select', function() {
  var infoseleccio = seleccionant.options[seleccionant.selectedIndex].value;
  if (infoseleccio === '') {
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
    nouele.style.color = 'purple';
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