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


	

	/* EasyScroll */

	var linkEasy = $('.navigation__a');

	linkEasy.on('click', function(e){
		e.preventDefault();
		var target = $(e.target);
		var link = target.attr('href');

		elemToScroll = $(link)
		$('html,body').animate({
			scrollTop: elemToScroll.offset().top -400
		}, 500);
	});


	/* кнопка возврата на верх страницы. сделал ее появление*/
	$(window).on('scroll', function(e){
		var target = $(e.target);
		var scrollTop = target.scrollTop();
		var menuUp = $('.menuUp');
		if(scrollTop > 400){
			menuUp.addClass('activeMenu');
		}else{
			menuUp.removeClass('activeMenu');
		}
	});

	/* EasyScroll для кнопки возврата на верх страницы*/

	var menuUp = $('.menuUp');
	menuUp.on('click', function(e){
		e.preventDefault();
		var target = $(e.target);
		var link = target.attr('href');

		var menu = $(link);
		$('html, body').animate({
			scrollTop: menu.offset().top -50
		}, 500);
	});


});