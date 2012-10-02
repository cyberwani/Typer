(function($) {
	
	$.fn.typer = function(options) {
			
		var defaults = {
			'speed' : 75,
			'delay' : 1500
		};

		var options = $.extend({}, defaults, options);
		
		return this.each(function() {

			var obj = $(this);
			obj.addClass('typerjs');

			var text = obj.text();
			text = text.split("");
			var count = text.length;
			
			var i = 0;

			obj.empty();
			
			obj.append('<span class="text"></span><span class="typer animate"></span>');

			var typeIt = function(){

				$('.typer').removeClass('animate');

				var appendText = function(){
					if (i < count) {
						$('.text').append(text[i]);
						i++;
					} else if(!$('.typer').hasClass('animate')) {
						$('.typer').addClass('animate');
					}
				};

				setInterval(appendText, options.speed);

			};

			setTimeout(typeIt, options.delay);

		});
		
	};
	
})(jQuery);