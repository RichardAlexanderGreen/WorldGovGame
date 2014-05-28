$(function () {

		// GENERAL -------------------------------------------------------------------------
		$(window).resize(function() {
			if ($(window).width() > 768) {
				$('#viz.viz-home').width($('body').width() - $('#bli-mixer-wrapper').width() - 40);
			} else {
				$('#viz.viz-home').width('100%');
			}
		});

		//initialize:
		//$('#viz.viz-home').width($('body').width() - $('#bli-mixer-wrapper').width() - 40);
		$(window).trigger('resize');


		// NAVIGATION -------------------------------------------------------------------------

		// expand/collapse main navigation
		$('#nav-main>ul>li>a').click( function (e) {
			if ($(this).next().is('ul')) {
				e.preventDefault();
				e.stopPropagation();

				$(this).parent().siblings().removeClass('expanded');
				$(this).parent().toggleClass('expanded', '');
			}
		});

		// collapse main navigation and language navigation when clicking anywhere
		$('html').click (function (e) {
			$('#nav-main>ul>li').removeClass('expanded');
			$('#nav-meta-language').removeClass('expanded');
		});

		// main navigation expand button for small devices
		$('a#btn-nav-expand').click( function (e) {
			e.preventDefault();
			$('nav#nav-main').toggleClass('expanded', '');
		});

		// main navigation expand button for small devices
		$('ul#nav-meta-language').click( function (e) {
			if ($(window).width() <= 768) {
				if (!$(this).hasClass('expanded')) {
					e.preventDefault();
					e.stopPropagation();
				}
				$(this).toggleClass('expanded', '');
			}
		});



		// HOME PAGE ---------------------------------------------------------
		var currentImageIndex = 0;
		var slideShowTimeout;
		function slideShowNextImage (triggeredManually, direction) {
			window.clearTimeout(slideShowTimeout);
			var currentImage = $('.carousel > div:nth-child(' + currentImageIndex + ')');
			$('.carousel').css('min-height', Math.max($('.carousel').height(), currentImage.height()));
			currentImage.css('z-index', 15000).siblings().css('z-index', 14000);
			if (triggeredManually === true) {
				currentImage.show();
				currentImage.css('position', 'static').siblings().hide().css('position', 'absolute');
			} else {
				currentImage.fadeIn( function () {
					$(this).css('position', 'static').siblings().hide().css('position', 'absolute');
				});
			}

			if (direction === 1) {
				currentImageIndex %= $('.carousel-item').length;
				currentImageIndex++;
			} else {
				currentImageIndex--;
				if (currentImageIndex === 0) {
					currentImageIndex = $('.carousel-item').length;
				}
			}
			slideShowTimeout = window.setTimeout(function () {slideShowNextImage(false, 1);}, 5000);
		}

		if ($('.carousel').length) {
			slideShowNextImage(false, 1);
		}

		$('.carousel-arrow').click (function (e) {
			if ($(this).data('action') === 'carousel-next') {
				slideShowNextImage(true, 1);
			} else {
				slideShowNextImage(true, -1);
			}
			e.preventDefault();
		});

		$('#viz-overlay-background').click (function (e) {
			$('.overlay-close').trigger('click', e);
		});


		// COUNTRY AND TOPIC PAGES ---------------------------------------------------------

		// Make .expandable sections
		$('.expandable  > h2').click( function (e) {
			e.preventDefault();
			$(this).siblings().slideToggle();
			$(this).parent().toggleClass('expanded');
		});

		// initially collapse sections that are not expanded
		$('.expandable:not(.expanded) > h2').siblings().hide();


		// Initialize mini charts
		var chartConfig = {};
		chartConfig.structureJsonURL = "/json/structure.json";
		chartConfig.trendsURL = "/csv/trends.csv";
		// TODO: replace this cheap placeholder with real charts ...
		// $('.minichart').html('<img src="placeholders/graph-placeholder.png">');
		// ... like so:
		// $(".minichart").renderChart(chartConfig);


		// HOME ----------------------------------------------------------------------------

		// create the cookie indexWeights
		if ($.cookie('indexWeights') === undefined) $.cookie('indexWeights', "", { path: '/' });

		// init mixer tool tips
		$('#bli-mixer .topic .caption a[title]').qtip({
			position: {
				my: 'bottom center',
				at: 'top center'
			},
			style: {
				classes: 'qtip-bli'
			}
		});

		// init mixer buttons tooltips
		$('#bli-mixer button[title]').qtip({
			position: {
				my: 'bottom center',
				at: 'top center'
			},
			style: {
				classes: 'qtip-bli'
			}
		});

		// callback function for mixer sliders
		function updateMixer(value) {
			$('#bli-reset').removeClass('disabled');
			$('#bli-compare').removeClass('disabled');
			$('#bli-share').removeClass('disabled');

			if ($.cookie("indexSubmited")) {
				$('#bli-explore').removeClass('disabled');
			}

			// TODO: only show when no index has been submitted yet
			// visibility is toggled using CSS class .shown to
			// (1) only make it visible on the desktop, not on mobile
			// (2) as an easy hack to only show it initially after page load
			// Clicking the Compare button hides using fadeOut, so adding this class afterwards has no effect
			$('.overlay-hint-compare').fadeIn(2000).addClass('shown');

			// get all current settings from the sliders
			var sliderValues = "";
			$('.rank').each(function(){
				sliderValues += $(this).slider('value');
			});

			$.cookie('indexWeights', sliderValues, { path: '/' });

			// update browser address bar (updates visualization automatically)
			window.location.href = '#/'  + sliderValues;
		}


		// initialize sliders
		$('.slider.rank').slider({change: updateMixer});

		// apply slider state from browser address bar
		var currentUrl = document.URL.split("#/");
		var rank = currentUrl[1];
		if ( !rank || !rank.length ) {
			if ( $.cookie('indexWeights') != '' && $('#bli-mixer').length ) {
				rank = $.cookie('indexWeights');
				window.location.href = '#/' + $.cookie('indexWeights');
			}
		}
		var i = 0;
		var initState = true;
		if (rank) {
			$('.slider.rank').each(function () {
				var c = rank.charAt(i);
				if (c >= 0 && c <=5) { // make sure we are dealing with a valid rank
					if (c != 1) initState = false;
					$(this).slider('value', c);
				}
				i++;
			});

			$.cookie('indexWeights', rank, { path: '/' });
		}

		if ($.cookie("indexSubmited")) {
			$('#bli-explore').removeClass('hidden');
			$('#bli-compare').hide();
		}

		if ($.cookie('bli-compare') === undefined)
			$.cookie("bli-compare", JSON.stringify( { "id":"", "c":"", "g":"", "a":"" } ), { path: '/' });

		if (!initState) {
			$('#bli-reset, #bli-compare, #bli-share, #bli-explore').removeClass('disabled');
		}

		// news feed item order
		$(".item").sort(function(a,b){
			return new Date($(a).attr("data-date")) > new Date($(b).attr("data-date"));
		}).each(function(){
			$("#feed").prepend(this);
		});

		// RESPONSES PAGE ----------------------------------------------------------------------------

		if (('#bli-responses-panel').length && typeof $.cookie == 'function' ) {
			if ($.cookie('indexWeights') == ""){
				$('#bli-responses-panel-item-step-1').show().siblings().hide();
			} else if ( ! $.cookie('indexSubmited')){ // [sic!]
				$('#bli-responses-panel-item-step-2').show().siblings().hide();
			} else {
				$('#bli-responses-panel-item-step-3').show().siblings().hide();
			}
		}

		var oecdController = new oecd.Controller("http://www.oecdbetterlifeindex.org/bli/rest/indexes");

		// Survey button
		$(".survey").click( function(e){
			window.open('/advancedsurvey/');
		});


		// Basic sharing navigation flow.
		$('#bli-sharing button, #bli-mixer button, #viz-overlay-background a').click ( function (e) {

			if ($(this).hasClass('disabled')) {
				return; // don't do anything on disabled buttons
			}

			if ($(this).data('codeshare')) {

				var mode = $(this).data('codeshare');

				oecdController.share(mode);

				oecdController.shareHandlerWrapper($.proxy(function(socialTslt) {
					switch (mode) {
						case "FACEBOOK":
							window.open(
						    	'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(document.URL)+"&t="+encodeURIComponent(socialTslt.personelBLI),
						    	'facebook-share-betterlifeindex'
						    );
							break;

						case "TWITTER":
							window.open(
						    	'https://twitter.com/intent/tweet?original_referer='+encodeURIComponent("http://www.oecdbetterlifeindex.org/")+'&related='+encodeURIComponent(socialTslt.twitterRelated)+'&text='+encodeURIComponent(socialTslt.twitterText)+'&url='+encodeURIComponent(document.URL)+'&via='+socialTslt.twitterVia+'&hashtags='+socialTslt.twitterTag,
						    	'twitter-share-betterlifeindex'
						    );
							break;
						case "EMAIL":
							var emailAdress = prompt( socialTslt.emailRecipient, socialTslt.emailDefault);
							window.location.href = 'mailto:'+encodeURIComponent(emailAdress)+'?subject='+encodeURIComponent(socialTslt.personelBLI)+'&body='+ encodeURIComponent(socialTslt.emailBody1+document.URL+socialTslt.emailBody2);
							break;
						case "EMBED":
							window.open(
						    	'/embed-editor/'
						    );
							break;
						default:
							break;
					}
				}, this))
			};

			if ($(this).data('action')) {
				e.preventDefault(); // prevent default action

				// simulate loading (also shows how a loading state may be added to a button by applying the .loading class)
				$(this).addClass('loading').delay(500).queue( function (next) {
					$(this).removeClass('loading');
					next(); // call next item in the queue stack
				});

				// check which action is attached to this button
				switch ($(this).data('action')) {
					case 'compare':
						$('.overlay-hint-compare').fadeOut();

						$('#bli-mixer-footer-normal').slideUp( function () {

							$('#bli-sharing-compare-1').slideDown().siblings().slideUp(function () {
								if ($(window).width() > 768) {
									$('#bli-mixer-popup-caption')
									.css('top', '200px')
									.show().animate({
											top: '0'
										},
										1000
										);
								}
							});
						});
						break;
					case 'share':
						$('.slider.rank').slider("disabled", true);
						$('#bli-reset').addClass('disabled');

						$('#bli-mixer-footer-normal').slideUp( function () {
							if ($.cookie("indexSubmited")){
								$("#bli-sharing-share-2 .input-embed-url").val(document.URL);
								$('#bli-sharing-share-2').slideDown().siblings().slideUp();
							} else {
								$("#bli-sharing-share-1 .input-embed-url").val(document.URL); // fill the embedding field
								$('#bli-sharing-share-1').slideDown().siblings().slideUp();
							}
						});

						break;
					case 'compare-submit':
						oecdController.submit("bli-sharing-compare-1");

						$('#bli-sharing-compare-1').slideUp( function () {
							$('#bli-mixer-wrapper').fadeOut( function () {
								$('#bli-mixer-popup-caption').hide();
								$('#viz-overlay-background').fadeIn(function () {
								});
							})
						});

						$('#bli-explore').removeClass('hidden').removeClass('disabled');
						$('#bli-compare').hide();

						break;
					case 'explore':
						document.location.href = $('#bli-explore').data('url');
						break;
					case 'share-submit':
						oecdController.submit("bli-sharing-share-1");

						$('#bli-sharing-share-1').fadeOut( function () {
							$('#bli-sharing-share-2').fadeIn();
						});

						$('#bli-explore').removeClass('hidden').removeClass('disabled');
						$('#bli-compare').hide();

						break;
					case 'cancel':
						$('.slider.rank').slider("disabled", false);
						$('#bli-reset').removeClass("disabled");

						$('[id^=bli-sharing-]').slideUp( function () {
							$('#bli-mixer-footer-normal').slideDown();
						});
						$('#bli-mixer').removeClass('comparing');
						$('#bli-mixer-popup-caption').hide();
						break;
					case 'inequalities':
						$('#bli-mixer-footer-normal').slideUp(function () {
							$('#bli-mixer-footer-inequalities').slideDown();

							// update visualization:
							$('#viz').flowerVis.setInequalityComparison(app.cfg.INEQUALITY_COMPARISONS.GENDER);
						});
						break;
					case 'inequalities-back':
						$('#bli-mixer-footer-inequalities').slideUp(function () {
							$('#bli-mixer-footer-normal').slideDown();

							// update visualization:
							$('#viz').flowerVis.setInequalityComparison(app.cfg.INEQUALITY_COMPARISONS.NONE);
						});
						break;
					case 'help':
							$('#viz').flowerVis.showHelp();
						break;
					case 'overlay-close':
						$('#viz-overlay-background').fadeOut( function () {
							$('#bli-mixer-wrapper').fadeIn( function () {
								$('#bli-mixer-footer-normal').slideDown();
							});
						});
						break;
					case 'reset':
						$('.rank').slider('value', '1'); // reset sliders
						//$('#viz').flowerVis.reset();	// reset visualization
						$('#bli-compare').addClass('disabled');
						$('#bli-share').addClass('disabled');
						$('#bli-reset').addClass('disabled');

						// reset fix:
						$.cookie('indexWeights', '');
						window.location.hash = '';

						break;

					default:
						break;
				}
			}
		});

});
