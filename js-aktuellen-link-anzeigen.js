/* js-aktuellen-link-anzeigen */

$(document).ready(function(){
	/////////////////////////////////////////////////////
	// aktuellen Link automatisch .akt zuweisen /////////
	/////////////////////////////////////////////////////
	// alle id in Reihenfolge in das Array! -----------//
	var navlink = new Array(                           //
		'#angebot-nav',                                   //
		'#download',                                       //
		'#referenzen',  
        '#about',  //
		'#blog'                                   //
	);                                                 //
	//Höhe der fixierten Navi eintragen (nicht fix = 0)// 
	var navHeigth = 40;                                 //
	var ersterLinkBeiNull = true; //true,false;/////////
	//gib dem footer die id="ende" !!!!!!!!!!!!!!!!!!!!//
	/////////////////////////////////////////////////////

	//ab hier nix mehr ändern
	//navHeigth = navHeigth +0;
	if(ersterLinkBeiNull == true)$('a[href="'+navlink[0]+'"]').addClass('akt');

	//Wenn gescrollt wird ...     
	$(window).scroll(function(){

		//aktuelle y-Position ////////////////////////////////
		var topnow = $(window).scrollTop();

		//function für die einzelnen Article starten ///////
		var x;
		for(x = 0 ; x < navlink.length ; x++){	//durchläuft alle article-id
			if( x < (navlink.length-1)){		//alle article, aber nicht der letzte
				var anf = $(navlink[x]).offset().top - navHeigth -1;
				var end = $(navlink[(x+1)]).offset().top - navHeigth -1;
				AktLink(navlink[x],anf,end,topnow);
			}
			else { 								//letzter article
				var anf = $(navlink[x]).offset().top - navHeigth -1;
				var end = $('#ende').offset().top;
				AktLink(navlink[x],anf,end,topnow);
			}
		}
	});  
	//Klasse akt zuweisen (function) -> per css .akt formatieren ///
	function AktLink(link,idStart,idEnd,pos){
		if(pos >= idStart && pos < idEnd){
			$('nav a[href="'+link+'"]').addClass('akt');
		}
		else {
			$('nav a[href="'+link+'"]').removeClass('akt');
		}
	}  

	/////////////////////////////////////////////////////
	// Zum aktuellen Link sliden  ///////////////////////
	/////////////////////////////////////////////////////
    /*
	$('nav ul a').click(function(){
		var link = $(this).attr('href'); 
		$('html,body').animate({scrollTop:($(link).offset().top - navHeigth)},1000);
	});
    */
});   