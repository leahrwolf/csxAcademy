function createMenu (menu) {
	// this is a comment
	document.getElementById(menu).innerHTML = "<button class='btn btn-primary type='button' onclick=openWindow('home.html') style='width:80%;'> Home</button>\
	<div class='dropdown'>\
    <button class='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown' style='width:80%;'>Python\
    <span class='caret'></span></button>\
    <ul class='dropdown-menu'>\
      <li><a href='pythonHome.html' target='_self'>Python Home</a></li>\
      <li><a href='pythonStartingWith.html' target='_self'>Starting With</a></li>\
    </ul>\
  </div>\
  <div class='dropdown'>\
    <button class='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown' style='width:80%;'>Encryption\
    <span class='caret'></span></button>\
    <ul class='dropdown-menu'>\
      <li><a href='EncryptionHome.html' target='_self'>Encryption Home</a></li>\
      <li><a href='EncryptionBasicCiphers.html' target='_self'>Basic Ciphers</a></li>\
      <li><a href='EncryptionBinary.html' target='_self'>Binary</a></li>\
    </ul>\
  </div>\
  <div class='dropdown'>\
    <button class='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown' style='width:80%;'>Game Theory\
    <span class='caret'></span></button>\
    <ul class='dropdown-menu'>\
      <li><a href='gameTheoryHome.html' target='_self'>Game Theory Home</a></li>\
      <li><a href='gameTheoryPayoffMatrices.html' target='_self'>Payoff Matrices</a></li>\
      <li><a href='nashEquilibrium.html' target='_self'>Nash Equilibrium</a></li>\
      <li><a href='p=NP.html' target='_self'>P&#61;NP</a></li>\
      <li><a href='prisonersDilemma.html' target='_self'>Prisoners Dilemma</a></li>\
    </ul>\
  </div>\
  <div class='dropdown'>\
    <button class='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown' style='width:80%;'>Web Development\
    <span class='caret'></span></button>\
    <ul class='dropdown-menu'>\
      <li><a href='webDevelopment.html' target='_self'>Web Development Home</a></li>\
      <li><a href='javaScriptPage.html' target='_self'>Java Script</a></li>\
      <li><a href='webdevhtml.html' target='_self'>HTML</a></li>\
    </ul>\
  </div>\
  <button class='btn btn-primary type='button' onclick=openWindow('abouttheauthors.html') style='width:80%;'> About the Authors</button>";
}

function openWindow(url){
  window.open(url,"_self");
}