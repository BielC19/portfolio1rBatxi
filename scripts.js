var elbuto = document.getElementById('mesbtns');

elbuto.addEventListener('click', function() {
  var nouele = document.createElement(tipuselement);
  var tipuselement = document.getElementById('tipusele').value;
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
    nouele.style.size = '28';
  }
  else {
    console.log('error')
  }
  document.body.appendChild(nouele);
});