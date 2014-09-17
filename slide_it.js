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
		var counter = 0;

		var container, container_width, container_height, slider, slides, slide_count, slider_width, slider_height,slider_number, counter, variable_containers, movement, count, count_number, final_container_width, container_position;
		var instance_counter = 0;
		var first_instance = 0;
		var slider_container = [];
		var container_classes = $(this).attr('class');
		var container_class = container_classes.split(" ");
		container_class = '.'+container_class[0];

		function size_slider() {
			//setting up slider array
			slider_container[instance_counter] = {
				container: '#'+variable_containers,
				container_width:  $('#'+variable_containers).width(),
				container_height:  $('#'+variable_containers).height(),
				counter: settings.visible_slides,
				slide_count: $('#'+variable_containers+' .slider .slide').size(),
				slider: '#'+variable_containers+' .slider',
				slide: '#'+variable_containers+' .slide',
				slider_width:  ( $('#'+variable_containers+' .slide').width() ) * ( $('#'+variable_containers+' .slider .slide').size() + 2 ),
				slider_height:  $('#'+variable_containers+' .slide').outerHeight(false)
			};


			//console.log($('#'+variable_containers+' .slider .slide').size());
			console.log(slider_container[instance_counter].slider_width);

			//setting the slider width and height, parent container hides it.
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
					final_container_width = slider_container[instance_counter].container_width/settings.visible_slides;
				} else {
					final_container_width = slider_container[instance_counter].container_width;
				}
				$(slider_container[instance_counter].slide).css({
					width: final_container_width,
					height: slider_container[instance_counter].container_height
				});
				if( slider_container[instance_counter].count == settings.visible_slides ) {
					container_position = 0;
				} else {
					container_position = (slider_container[instance_counter].count-1)*slider_container[instance_counter].container_width;
				}
				$(slider_container[instance_counter].slider).css({
					left: '-'+container_position+'px'
				});
			}
			$(slider_container[instance_counter].slider).css({
				width: slider_container[instance_counter].slider_width+'px',
				height: slider_container[instance_counter].slider_height+'px'
			});
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
				$(settings.prev_button).click(function() {
					slider_number = $(this).closest(container_class).attr('id');
					slider_number = slider_number.substr('9', '10');
					if( slider_container[slider_number].counter != settings.visible_slides+1 ) {
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
				var final_slide_width;
				if(settings.visible_slides != 1) {
					final_slide_width = slider_container[instance_counter].container_width/settings.visible_slides;
				} else {
					final_slide_width = slider_container[instance_counter].container_width;
				}
				$(slider_container[instance_counter].slide).css({
					width: final_slide_width,
					height: slider_container[instance_counter].container_height
				});
				$(slider_container[instance_counter].slider).css({
					width: slider_container[instance_counter].slider_width,
					height: slider_container[instance_counter].container_height
				});
				$(settings.prev_button).unbind('click').click(function() {
					var slider_number = $(this).closest(container_class).attr('id');
					if( slider_container[instance_counter].counter != settings.visible_slides ) {
						slider_container[instance_counter].counter--;
						console.log(slider_container[instance_counter].counter);
						if( settings.visible_slides > 1) {
							movement = slider_container[instance_counter].container_width/settings.visible_slides;
						} else {
							movement = slider_container[instance_counter].container_width;
						}
						$('#'+slider_number+' .slider').animate({
							left: '+='+movement
						}, 700 );
					}
					return false;
				});
				$(settings.next_button).unbind('click').click(function() {
					var slider_number = $(this).closest(container_class).attr('id');
					if( slider_container[instance_counter].counter != slider_container[instance_counter].slide_count ) {
						slider_container[instance_counter].counter++;
						console.log(slider_container[instance_counter].counter);
						if( settings.visible_slides > 1) {
							movement = slider_container[instance_counter].container_width/settings.visible_slides;
						} else {
							movement = slider_container[instance_counter].container_width;
						}
						$('#'+slider_number+' .slider').animate({
								left: '-='+movement
						}, 700 );
					}
					return false;
				});
			}
		}
		object.each(function() {
			object.css('opacity', 0);
			instance_counter++;
			variable_containers = 'carousel_'+instance_counter;
			$(this).attr('id', variable_containers);
			$(this).children().first().addClass('slider');
			$(this).find('.slider').children('div').addClass('slide');
			setTimeout( size_slider(), 300);
			setTimeout( setup_slider(), 1200 );
			object.animate({ opacity: 1 }, 500);
			$(window).resize(function() {
				size_slider();
			});
		});
		return this;
	}; //  END SLIDE_IT FUNCTION
}(jQuery));