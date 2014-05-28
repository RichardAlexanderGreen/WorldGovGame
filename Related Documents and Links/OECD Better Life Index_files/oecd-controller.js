var oecd = {};

oecd.Controller = function(url) {
	this.url = url;
	this.socialTslt;

	var bindFormControls = function(id) {
		$( id + ' input[data-code="g"], ' +
		   id + ' select[data-code="c"], ' +
		   id + ' select[data-code="a"]').change(function() {

			var c = ( $(id + ' select[data-code="c"]').val() != "" );
			var a = ( $(id + ' select[data-code="a"]').val() != "" );
			var g = ( $(id + ' input[data-code="g"]:checked').length );
			if ( c && a && g ) {
				$(id + ' button.toggable').removeClass('disabled');
			} else {
				$(id + ' button.toggable').addClass('disabled');
			}
		});
	}

	bindFormControls('#bli-sharing-compare-1');
	bindFormControls('#bli-sharing-share-1');

	this.shareHandlerWrapper = function(f) {
		if ( this.socialTslt ) {
			f(this.socialTslt);
		} else {
			$.getJSON("/media/bli/data/locales/translation.json".replace(/amp;/g,""), $.proxy(function(obj){ 
				this.socialTslt = obj.blisharing.shareSocial;
				f(this.socialTslt);
			}, this));
		}
	}

	this.submit = function(selector) {
		var indexObj = { 
			language: 'en',
			weights: "1,1,1,1,1,1,1,1,1,1,1",
			country: $("#"+selector +" .form-user-profile > div:eq(0) select").val() || null, 
			gender: $("#"+selector +" .form-user-profile > div:eq(1) input:radio[name=user-profile]:checked").val() || null, 
			age: $("#"+selector +" .form-user-profile > div:eq(2) select").val() || null, 
			comments: $("#"+selector +" textarea").val() || null
		}

		// get all current settings from the sliders
		var wtab = [];
		$('.rank').each(function(idx, el){
			wtab.push($(el).slider('value'));							
		});						
		indexObj.weights = wtab.join(",");
		
		var bliccObj = { "id":indexObj.weights, "c":indexObj.country, "g":indexObj.gender, "a":indexObj.age }; 		
		$.cookie("bli-compare", JSON.stringify(bliccObj), { path: '/' });

		// it should be placed inside the success callback function 				
		$.cookie("indexSubmited", true, { path: '/' }); 

        $.ajax({
		  	type: "POST",
		  	dataType: "json",
		  	contentType: 'application/json',
		  	processData : false,
		  	url: this.url+"/add",
		  	data: JSON.stringify ( indexObj ) ,
		  	success : function(ob){ /*console.log("success REST.");*/ },
		  	error   : function(jqXHR, textStatus, errorThrown){ /*console.log("[error REST] ", jqXHR.responseText);*/ }
		});

	};

	this.share = function(mode) {
		// get all current settings from the sliders
		var wtab = [];
		$('.rank').each(function(idx, el){
			wtab.push($(el).slider('value'));							
		});				
		var shareObj ={ mode : mode, weights : wtab.join(",")};
		
		$.ajax({
		  	type: "POST",
		  	dataType: "json",
		  	contentType: 'application/json',
		  	processData : false,
		  	url: this.url+"/share",
		  	data: JSON.stringify ( shareObj ) ,
		  	success : function(ob){ 
		  		$.get("http://blirt.oecdcode.org/saveTemp.php?bli="+$.cookie("indexWeights")+"&ip="+ob.ip, function(){
	            	//console.log( "BLI Real Time notified." );
	            });
		  	},
		  	error   : function(jqXHR, textStatus, errorThrown){ /*console.log("[error REST POST share.] ", jqXHR.responseText);*/ }
		});		
	}

};