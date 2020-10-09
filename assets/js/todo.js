//Check off specific todos by clicking
/* zasiviti i prekriziti odradeno
$("li").click(function(){
	//if li is gray, turn it black, else turn it gray
	if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css({ //objekt
			color: "black",
			textDecoration: "none"
		});
	}
	else{
		$(this).css({  //objekt
			color:"gray",
			textDecoration: "Line-through"
	});
	}
}); */
//sve ovo iznad mozemo zamjeniti sa ovim dolje kada kreiramo klasu u cssu.
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

// CLICK ON X TO DELETE
$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation(); // da se ne aktiviraju elementi unutar kojeg je span
});

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val(); //novi todo sa text inputa spremljen u varijablu
		$(this).val(""); //nakon potvrde praznjenje inputa
		$("ul").append("<li><span>X</span> " + todoText + "</li>"); //dodavanje stringa u elemente
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
