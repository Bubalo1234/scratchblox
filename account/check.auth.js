function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

if (getCookie("scratchbloxstoken") == null) {} else {
	var xhttp = new XMLHttpRequest
	xhttp.open("POST", "https://auth.scratchblox.tk/auth", true);
	xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	xhttp.send(JSON.stringify({cookie: getCookie("scratchbloxstoken")}));
	xhttp.onreadystatechange = function() {
  		if (this.readyState == 4 && this.status == 200) {
    			window.location.assign("https://web.scratchblox.tk/home")
  		} else {}
	};
}
