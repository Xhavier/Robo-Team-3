function dropbutton() {
	document.getElementById("myList").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches(".button2")) {
		var drop = document.getElementsById("myList");
		var i;
		for (var i = 0; i < drop.length; i++) {
			var openDrop = drop[i];
			if (openDrop.classList.contains("show")) {
				openDrop.classList.remove("show");
			}
		}
	}
}

function dropbutton2() {
	document.getElementById("myList2").classList.toggle("show");
}