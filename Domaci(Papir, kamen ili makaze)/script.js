var korisnikovIzbor = prompt ('Izaberi papir, kamen ili makaze');
var racunarKaze = Math.random()*100;

if (korisnikovIzbor != "papir" && korisnikovIzbor != "makaze" && 
	korisnikovIzbor != "kamen"){
	console.log ("Nije dobar unos!");
}

if (racunarKaze < 33.34) {
 racunarKaze = "papir";
} 
else if (racunarKaze < 66.67) {
 racunarKaze ="kamen";
} 
else {
 racunarKaze = "makaze";
}



if (korisnikovIzbor == "racunarKaze") {
console.log ("Nereseno")
}



else if (korisnikovIzbor == "kamen") {
 if (racunarKaze =="makaze"){
		console.log ("Zao nam je, izgubio si")
	}
	else if (racunarKaze == "papir") {
		console.log ("Pobedio si, ajd opet");
	}
}



else if ( korisnikovIzbor == "papir") {
	if (racunarKaze == "kamen"){
		console.log ("Pobedio si, ajd opet")
	}
	 else if (racunarKaze == "makaze"){
		console.log ("Zao nam je, izgubio si")	
	}
}

 // if( korisnikovIzbor=="makaze")
 else { 
	if (racunarKaze =="kamen"){
		console.log ("Zao nam je, izgubio si")
	}
	else if  (racunarKaze =="papir"){
		console.log ("Pobedio si, ajd opet");
	}
}


