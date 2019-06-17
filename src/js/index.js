$(function(){


	var mobileBtn = $('.mobile-menu');
	var menu = $('.navigation__ul');

	mobileBtn.on('click', function(){
		menu.toggleClass('isOpened');
		mobileBtn.toggleClass('closer');
	});

	menu.on('click', function(){
		menu.removeClass('isOpened');
		mobileBtn.removeClass('closer')

	});

	/* modal */


	modalBtn = $('.catalog-paper__btn_a')
	
	modalBtn.on('click', function(e){
		e.preventDefault();
		var target = $(e.target);
		var link = target.attr('href');

		content = $(link);

		var container = content.parents('.modal-container');
		container.removeClass('d-n');
		content.addClass('active')
	});

	/* кнопка closer на модальном окне */

	var closer = $('.closer-modal');

	closer.on('click', function(e){
		e.preventDefault();
		var target = $(e.target);
		var container = target.parents('.modal-container');
		container.addClass('d-n');
		var active = $('.modal-container .active');
		active.removeClass('active')
	});


	$(window).on('scroll', function(e){
		var target = $(e.target);
		var scrollTop = target.scrollTop();
		var navigation = $('.navigation');
		if(scrollTop > 400){
			navigation.addClass('fixmenu');
		} else{
			navigation.removeClass('fixmenu');
		}
	});

	/* EasyScroll */

	var linkEasy = $('.navigation__a');

	linkEasy.on('click', function(e){
		var target = $(e.target);
		var link = target.attr('href');

		elemToScroll = $(link)
		$('html,body').animate({
			scrollTop: elemToScroll.offset().top -400
		}, 500);
	})


});