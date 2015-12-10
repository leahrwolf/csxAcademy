function doSomething () {
	var firstName = document.getElementById("first").value;

	var grade = "";
	var g = document.getElementByName("grade");

	for (var i = 0; 1 < g.length; i++) {
		if (g[i].checked)
				grade = g[i].value;

	};

	var classes = [];
	var C = document.getElementByName("classes");

	for (var i = 0; i < c.lenght; i++) {
		if (c[i].checked)
			classes.push(c[i].value);
	};

	alert(firstName + " is a ")