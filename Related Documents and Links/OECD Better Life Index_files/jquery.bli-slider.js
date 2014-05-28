(function( $ ){

	$.fn.slider = function( options, arg ) {
		var action;
		var opts = $.extend( {}, $.fn.slider.defaults, options );

		if (typeof(options) === 'object' || options === undefined) {
			action = 'initialize';
		} else {
			action = options;
		}

		if (action === 'value') {
			if (arg !== undefined) { // setter
				return this.each ( function () {
					updateSliderValue ($(this), arg, false, opts.sliderMax);
				});
			} else { //getter
				if ($(this).data('value') === undefined) {
					return opts.sliderValue;
				}

				return $(this).data('value');
			}
		}

		if (action === 'disabled') {
			if (arg !== undefined) { // setter
				return this.each ( function () {

					var knob = $(this).find('.knob');

					if (arg === true) {
						knob.hide();
					} else {
						knob.show();
					}

					$(this).data('disabled', arg);
					updateSliderValue ($(this), $(this).data('value'), false, opts.sliderMax);
				});
			} else { //getter
				return $(this).data('disabled');
			}
		}

		if (action === 'initialize') {

			var sliders = $([]);
			$(window).bind('resize', function(){
				if (!sliders.length) { return; } //no need to continue if sliders in empty.
				sliders.each(function () {
					updateSliderValue ($(this), $(this).data('value'), false, opts.sliderMax);
				});
			});

			return this.each ( function () {
				sliders = sliders.add(this);

				var slider = $(this);

				slider.html('<span class="knob"></span><div class="channel"><span class="fill"></span></div><!-- /channel -->');

				var knob = slider.find('.knob');
				var fill = slider.find('.fill');
				var sliderValue = opts.sliderValue;

				for (var i = 1; i <= opts.sliderMax; i++) {
					slider.find('.channel').append('<div class="tick"></div>');
					slider.find('.tick:last').css('left', (100 / opts.sliderMax) * i +'%' );
				}


				slider.data('value', sliderValue);

				slider.data('disabled', opts.disabled);
				if (opts.disabled) {
					knob.hide();
				}

				// init knob position
				updateSliderValue ($(this), sliderValue, false, opts.sliderMax);

				knob.on('mousedown touchstart', function(e) {
					if (slider.data('disabled')) { return; }

					knob.addClass('dragging');

					var drg_h = $(this).outerHeight(),
						drg_w = $(this).outerWidth(),
						mouseOrPointerPosition = pointerEventToXY(e);

					var pos_x = $(this).offset().left + drg_w - mouseOrPointerPosition.x;

					$(this).parents().on('mousemove touchmove', function(e) {
						if (!knob.hasClass('dragging')) { return; }

						mouseOrPointerPosition = pointerEventToXY(e);

						var offs = mouseOrPointerPosition.x + pos_x - drg_w;

						updateSliderValue (slider, false, offs, opts.sliderMax);
					});

					$('body').one('mouseup touchend', function() {
						if (slider.data('disabled')) { return; }

						if (knob.hasClass('dragging')) {
							opts.change(slider.data('value')); // callback
							knob.removeClass('dragging');
						}
					});

					e.preventDefault(); // prevent selection

				});

				knob.on('mouseup touchend', function() {
					if (slider.data('disabled')) { return; }

					if (knob.hasClass('dragging')) {
						opts.change(slider.data('value')); // callback
						$(this).removeClass('dragging');
					}
				});

				slider.on ('mousedown touchstart', function (e) {
					if (slider.data('disabled')) { return; }
					if (knob.hasClass('dragging')) { return; }

					var mouseOrPointerPosition = pointerEventToXY(e);
					var offs = mouseOrPointerPosition.x - knob.width() / 2;

					updateSliderValue (slider, false, offs, opts.sliderMax);
					opts.change(slider.data('value')); // callback

				});

			});

		}
	};

	$.fn.slider.defaults = {
		sliderMin : 0,
		sliderMax : 5,
		sliderValue : 1,   // initial value
		rounded : true,    // round current value?
		disabled : false,
		step : 1,          // steps to snap to
		snap : true,       // snap knob to values?
		change : (function() {})
	};


	function updateSliderValue (sliderObject, value, coordinate, s) {

		var slider = sliderObject;
		var knob = slider.find('.knob');
		var fill = slider.find('.fill');
		var steps = s;
		var step_width = (slider.width()) / steps;
		var min_x = slider.offset().left - knob.width() / 2;
		var max_x = slider.offset().left + slider.width() - knob.width() / 2;
		var sliderValue;

		if (value) { // using value to determine coordinate
			sliderValue = value;

			var new_coordinate = min_x + value * step_width;

			knob.offset({
				left: new_coordinate
			});
			fill.width(new_coordinate - fill.offset().left + knob.width() / 2);

		} else { // using coordinate to determine value
			coordinate = Math.max(coordinate, min_x);
			coordinate = Math.min(coordinate, max_x);
			coordinate = Math.round(Math.round((coordinate - min_x) / step_width) * step_width + min_x);
			sliderValue = Math.round((coordinate - min_x) / step_width);

			knob.offset({
				left: coordinate
			});

			fill.width(coordinate - fill.offset().left + knob.width() / 2);
		}

		slider.data('value', sliderValue);
	}

	// ------------------------------------------------

	// helper function to unify handling of mouse and touch events
	var pointerEventToXY = function(e){
		var out = { x : 0, y : 0 };

		if(e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel'){
			var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
			out.x = touch.pageX;
			out.y = touch.pageY;
		} else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover'|| e.type==='mouseout' || e.type==='mouseenter' || e.type==='mouseleave') {
			out.x = e.pageX;
			out.y = e.pageY;
		}
		return out;
	};
})( jQuery );