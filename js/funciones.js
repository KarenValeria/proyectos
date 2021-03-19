JQuery(document).ready(listo);



function listo()
{
	JQuery(".hamb").click(function(e){
		e.preventDefault();
		JQuery("header .container nav").toggleClass("open");
		JQuery(".hamb i").toggleClass("fa-times");

	});

	JQuery("header .container nav a").click(function(){

		var dev = JQuery(this).attr("href");

		alert(dev);
	});
}