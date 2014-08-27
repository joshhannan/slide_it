(function( $ ) {
	$.fn.slide_it = function( options ) {
		// DEFAULT OPTIONS
		var settings = $.extend({
			prev_button: '.prev',
			effect: 'slide',
			orientation: 'horizontal',
			visible_slides: 1,
			next_button: '.next'
		}, options );

		var object = $(this);
		var container, container_width, container_height, slider, slides, slide_count, slider_width, slider_height,slider_number, counter, variable_containers, movement, count, count_number, final_container_width, container_position;
		var instance_counter = 0;
		var first_instance = 0;
		var slider_container = [];
		var container_classes = $(this).attr('class');
		var container_class = container_classes.split(" ");
		container_class = '.'+container_class[0];

		function size_slider() {
			if(first_instance === 0) {
				count_number = 1;
				first_instance = 1;
			} else {
				count_number = slider_container[instance_counter].count;
			}
			//setting up slider array
			slider_container[instance_counter] = {
				container: '#'+variable_containers,
				container_width:  $('#'+variable_containers).outerWidth(false),
				container_height:  $('#'+variable_containers).outerHeight(false),
				counter: settings.visible_slides,
				count: count_number,
				slide_count: $('#'+variable_containers+' .slider .slide').size(),
				slide_count_start: 1,
				slider: '#'+variable_containers+' .slider',
				slide: '#'+variable_containers+' .slide',
				slide_width: $('#'+variable_containers+' .slide').outerWidth(true),
				slide_height: $('#'+variable_containers+' .slide').outerHeight(false),
				slider_width:  $('#'+variable_containers+' .slide').outerWidth(true)*$('#'+variable_containers+' .slider .slide').size(),
				slider_height:  $('#'+variable_containers+' .slide').outerHeight(false)*$('#'+variable_containers+' .slider .slide').size(),
			};

			//setting the slider width and height, parent container hides it.
			$(slider_container[instance_counter].slider).css({
				width: slider_container[instance_counter].slider_width+'px',
				height: slider_container[instance_counter].slider_height+'px'
			});
			if(settings.orientation === 'vertical') {
				$(slider_container[instance_counter].slider).css({
					width: slider_container[instance_counter].container_width,
					height: slider_container[instance_counter].slider_height
				});
				// add correct top positioning here.
			}
			if(settings.orientation === 'horizontal') {
				$(slider_container[instance_counter].slide).css({
					width: slider_container[instance_counter].slider_width,
					height: slider_container[instance_counter].slider_height
				});
				if(settings.visible_slides != 1) {
					final_slide_width = slider_container[instance_counter].container_width/settings.visible_slides;
				} else {
					final_slide_width = slider_container[instance_counter].container_width;
				}
				$(slider_container[instance_counter].slide).css({
					width: final_slide_width,
					height: slider_container[instance_counter].container_height
				});
				$(slider_container[instance_counter].slide).css({
					width: final_slide_width,
					height: slider_container[instance_counter].container_height
				});
			}
		}
		function setup_slider() {
			if( settings.orientation === 'vertical' ) {
				var final_slide_height;
				if(settings.visible_slides != 1) {
					final_slide_height = slider_container[instance_counter].container_height/settings.visible_slides;
				} else {
					final_slide_height = slider_container[instance_counter].container_height;
				}
				$(slider_container[instance_counter].slide).css({
					width: slider_container[instance_counter].container_width,
					height: final_slide_height
				});
				$(slider_container[instance_counter].slider).css({
					width: slider_container[instance_counter].container_width,
					height: slider_container[instance_counter].slider_height
				});
			}
			if( settings.orientation === 'horizontal' ) {
				var final_slide_width;
				if(settings.visible_slides != 1) {
					final_slide_width = slider_container[instance_counter].container_width/settings.visible_slides;
					var visible_slide_counter = settings.visible_slides - 1;
					var slide_counter = slider_container[instance_counter].slide_count - visible_slide_counter;
				} else {
					final_slide_width = slider_container[instance_counter].container_width;
				}
				$(slider_container[instance_counter].slide).css({
					width: final_slide_width,
					height: slider_container[instance_counter].container_height
				});
				$(slider_container[instance_counter].slider).css({
					width: final_slide_width*slider_container[instance_counter].slide_count,
					height: slider_container[instance_counter].container_height
				});
			}
		}
		object.each(function() {
			object.css('opacity', 0);
			instance_counter++;
			variable_containers = 'carousel_'+instance_counter;
			object.attr('id', variable_containers);
			$('#'+variable_containers).children().first().addClass('slider');
			$('#'+variable_containers).find('.slider').children('div').addClass('slide');
			setTimeout( size_slider(), 500);
			setTimeout( setup_slider(), 500 );
			object.animate({ opacity: 1 }, 500);
			$(window).resize(function() {
				setTimeout( size_slider(), 500);
				setTimeout( setup_slider(), 500 );
			});
			if( settings.orientation === 'vertical' ) {
				$(settings.prev_button).click(function() {
					slider_number = $(this).closest(container_class).attr('id');
					slider_number = slider_number.substr('9', '10');
					if( slider_container[slider_number].counter != settings.visible_slides ) {
						slider_container[slider_number].counter--;
						if( settings.visible_slides > 1) {
							movement = slider_container[slider_number].container_height/settings.visible_slides;
						} else {
							movement = slider_container[slider_number].container_height;
						}
						$(slider_container[instance_counter].slider).animate({
							top: '+='+movement
						}, 700 );
					}
					return false;
				});
				$(settings.next_button).click(function() {
					slider_number = $(this).closest(container_class).attr('id');
					slider_number = slider_number.substr('9', '10');
					if( slider_container[slider_number].counter != slider_container[slider_number].slide_count ) {
						slider_container[slider_number].counter++;
						if( settings.visible_slides > 1) {
							movement = slider_container[slider_number].container_height/settings.visible_slides;
						} else {
							movement = slider_container[slider_number].container_height;
						}
						$(slider_container[instance_counter].slider).animate({
							top: '-='+movement
						}, 700 );
					}
					return false;
				});
			}
			if( settings.orientation === 'horizontal' ) {

				$(settings.prev_button).click(function() {
					if( slider_container[instance_counter].count != 1 ) {
						slider_container[instance_counter].count--;
						if( settings.visible_slides > 1) {
							movement = slider_container[instance_counter].container_width/settings.visible_slides;
						} else {
							movement = slider_container[instance_counter].container_width;
						}
						$(slider_container[instance_counter].slider).animate({
							left: '+='+movement
						}, 700 );
					}
					return false;
				});
				$(settings.next_button).click(function() {
					if(settings.visible_slides != 1) {
						var visible_slide_counter = settings.visible_slides - 1;
						var slide_counter = slider_container[instance_counter].slide_count - visible_slide_counter;
					}
					if( slider_container[instance_counter].count != slide_counter ) {
						slider_container[instance_counter].count++;
						if( settings.visible_slides > 1) {
							movement = slider_container[instance_counter].container_width/settings.visible_slides;
						} else {
							movement = slider_container[instance_counter].container_width;
						}
						$(slider_container[instance_counter].slider).animate({
								left: '-='+movement
						}, 700 );
					}
					return false;
				});
			}
		});
		return this;
	}; //  END SLIDE_IT FUNCTION
}(jQuery));