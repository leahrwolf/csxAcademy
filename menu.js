function createMenu (menu) {
	// this is a comment
	document.getElementById(menu).innerHTML = "<button class='btn btn-primary type='button' onclick=openWindow('home.html')> Home</button>\
	<div class='dropdown'>\
    <button class='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown'>Python\
    <span class='caret'></span></button>\
    <ul class='dropdown-menu'>\
      <li><a href='pythonHome.html' target='_self'>Python Home</a></li>\
      <li><a href='pythonStartingWith.html' target='_self'>Starting With</a></li>\
    </ul>\
  </div>\
  <div class='dropdown'>\
    <button class='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown'>Encryption\
    <span class='caret'></span></button>\
    <ul class='dropdown-menu'>\
      <li><a href='EncryptionHome.html' target='_self'>Encryption Home</a></li>\
      <li><a href='EncryptionBasicCiphers.html' target='_self'>Basic Ciphers</a></li>\
      <li><a href='EncryptionBinary.html' target='_self'>Binary</a></li>\
    </ul>\
  </div>\
  <div class='dropdown'>\
    <button class='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown'>Game Theory\
    <span class='caret'></span></button>\
    <ul class='dropdown-menu'>\
      <li><a href='gameTheoryHome.html' target='_self'>Game Theory Home</a></li>\
      <li><a href='gameTheoryPayoffMatrices.html' target='_self'>Payoff Matrices</a></li>\
      <li><a href='nashEquilibrium.html' target='_self'>Nash Equilibrium</a></li>\
      <li><a href='p=NP.html' target='_self'>P&#61;NP</a></li>\
      <li><a href='prisonersDilemma.html' target='_self'>Prisoners Dilemma</a></li>\
      <li><a href='rockPaperScissors.html' target='_self'>Rock Paper Scissors</a></li>\
    </ul>\
  </div>\
  <div class='dropdown'>\
    <button class='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown'>Web Development\
    <span class='caret'></span></button>\
    <ul class='dropdown-menu'>\
      <li><a href='webDevelopment.html' target='_self'>Web Development Home</a></li>\
    </ul>\
  </div>\
  <button class='btn btn-primary type='button' onclick=openWindow('abouttheauthors.html')> About the Authors</button>";
}

function openWindow(url){
  window.open(url,"_self");
}